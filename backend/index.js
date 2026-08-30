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
const {StockModel} = require("./model/StockModel");
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

app.get("/allStocks", async (req, res) => {
  const stocks = await StockModel.find();

  const enriched = stocks.map((s) => {
    const percentChange = ((s.price - s.previousPrice) / s.previousPrice) * 100;
    return {
      name: s.name,
      price: s.price,
      percent: `${percentChange.toFixed(2)}%`,
      isDown: percentChange < 0,
    };
  });

  res.json(enriched);
});

app.get("/allHoldings", authMiddleware, async (req, res) => {
  const holdings = await HoldingsModel.find({ user: req.userId });
  const stocks = await StockModel.find();

  const priceMap = Object.fromEntries(stocks.map((s) => [s.name, s.price]));

  const enrichedHoldings = holdings.map((h) => ({
    ...h.toObject(),
    price: priceMap[h.name] ?? h.price, // live price if found, else fallback to original
  }));

  res.json(enrichedHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder",authMiddleware, async (req, res) => {
  const newOrder = new OrdersModel({
    user: req.userId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();

  if (req.body.mode === "BUY") {
    const newHolding = new HoldingsModel({
      user: req.userId,
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.price,
      price: req.body.price,
      net: "0%",
      day: "0%",
    });
    await newHolding.save();
  }

  res.send("Order Saved");
});

app.get("/allOrders", authMiddleware, async (req, res) => {
  let allOrders = await OrdersModel.find({ user: req.userId });
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
