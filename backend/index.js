require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors")
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");


app.use(bodyParser.json());        // parses incoming JSON body -> req.body
app.use(cors());                

app.get("/allHoldings", async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  res.json(allholdings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();

  if (req.body.mode === "BUY") {
    const newHolding = new HoldingsModel({
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

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

mongoose.connect(url)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.listen(PORT, () => {
  console.log("App is running");
});
