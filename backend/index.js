require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const { StockModel } = require("./model/StockModel");
const authMiddleware = require("./middleware/authMiddleware");
const startPriceSimulator = require("../backend/services/PriceSimulator");

app.use(bodyParser.json()); // parses incoming JSON body -> req.body
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(201).json({ token, username: newUser.username });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ token, username: user.username });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// Debug-only route: manually force today's day-open price to reset right now
app.post("/debug/reset-day", authMiddleware, async (req, res) => {
  const stocks = await StockModel.find();
  const today = new Date().toISOString().split("T")[0];

  for (const stock of stocks) {
    stock.dayOpenPrice = stock.price;
    stock.lastSnapshotDate = today;
    await stock.save();
  }

  res.json({ message: "Day reset triggered for all stocks" });
});

app.get("/allStocks", async (req, res) => {
  const stocks = await StockModel.find();

  const enriched = stocks.map((s) => {
    const percentChange = ((s.price - s.previousPrice) / s.previousPrice) * 100;
    const dayChg = ((s.price - s.dayOpenPrice) / s.dayOpenPrice) * 100;
    return {
      name: s.name,
      price: s.price,
      percent: `${percentChange.toFixed(2)}%`,
      isDown: percentChange < 0,
      dayChg: dayChg,
      isDayLoss: dayChg < 0,
    };
  });

  res.json(enriched);
});

app.get("/allHoldings", authMiddleware, async (req, res) => {
  const holdings = await HoldingsModel.find({ user: req.userId });
  const stocks = await StockModel.find();

  const priceMap = Object.fromEntries(stocks.map((s) => [s.name, s.price]));
  const dayOpenMap = Object.fromEntries(
    stocks.map((s) => [s.name, s.dayOpenPrice]),
  );

  const enrichedHoldings = holdings.map((h) => {
    const livePrice = priceMap[h.name] ?? h.price;
    const dayOpenPrice = dayOpenMap[h.name] ?? livePrice;
    const dayChg = ((livePrice - dayOpenPrice) / dayOpenPrice) * 100;

    return {
      ...h.toObject(),
      price: livePrice,
      dayChg: dayChg,
      isDayLoss: dayChg < 0,
    };
  });

  res.json(enrichedHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, mode } = req.body;

    if (!qty || qty <= 0) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    const stock = await StockModel.findOne({ name });
    if (!stock) {
      return res.status(400).json({ error: "Invalid stock" });
    }
    const price = stock.price; // server-trusted, not from req.body

    const newOrder = new OrdersModel({
      user: req.userId,
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({
        user: req.userId,
        name,
      });
      if (existingHolding) {
        const newQty = existingHolding.qty + qty;
        const newAvg =
          (existingHolding.qty * existingHolding.avg + qty * price) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = newAvg;
        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
          user: req.userId,
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
        await newHolding.save();
      }
    }
    res.send("Order Saved");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Order failed" });
  }
});

app.post("/sellOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty } = req.body;
    const sellQty = qty;

    if (!sellQty || sellQty <= 0) {
      return res.status(400).json({ error: "Invalid quantity" });
    }

    const stock = await StockModel.findOne({ name });
    if (!stock) {
      return res.status(400).json({ error: "Invalid stock" });
    }
    const price = stock.price;

    const holding = await HoldingsModel.findOne({
      user: req.userId,
      name,
    });

    if (!holding) {
      return res.status(400).json({ error: "You don't own this stock" });
    }

    if (sellQty > holding.qty) {
      return res
        .status(400)
        .json({ error: "Sell quantity exceeds holding quantity" });
    }

    if (sellQty === holding.qty) {
      await HoldingsModel.deleteOne({ _id: holding._id });
    } else {
      holding.qty -= sellQty;
      await holding.save();
    }

    const sellOrder = new OrdersModel({
      user: req.userId,
      name,
      qty: sellQty,
      price,
      mode: "SELL",
    });
    await sellOrder.save();

    res.send("Sell processed");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Sell order failed" });
  }
});

app.get("/allOrders", authMiddleware, async (req, res) => {
  let allOrders = await OrdersModel.find({ user: req.userId }).sort({
    _id: -1,
  });
  res.json(allOrders);
});

mongoose
  .connect(url)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

startPriceSimulator();
app.listen(PORT, () => {
  console.log("App is running");
});
