const mongoose = require("mongoose");
require("dotenv").config();
const {StockModel} = require("../model/StockModel");

const stocks = [
  { name: "INFY", price: 1555.45,previousPrice:1555.45 },
  { name: "ONGC", price: 116.8,previousPrice:116.8 },
  { name: "TCS", price: 3194.8 ,previousPrice:3194.8},
  { name: "KPITTECH", price: 266.45 ,previousPrice: 266.45},
  { name: "QUICKHEAL", price: 308.55,previousPrice:308.55},
  { name: "WIPRO", price: 577.75,previousPrice:577.75},
  { name: "M&M", price: 779.8,previousPrice:779.8 },
  { name: "RELIANCE", price: 2112.4 ,previousPrice: 2112.4},
  { name: "HUL", price: 512.4,previousPrice:512.4 },
];

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    await StockModel.deleteMany({});
    await StockModel.insertMany(stocks);
    console.log("Stocks seeded successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seeding failed:", err);
    mongoose.disconnect();
  });