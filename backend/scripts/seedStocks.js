const mongoose = require("mongoose");
require("dotenv").config();
const { StockModel } = require("../model/StockModel");

const stocksSymbol = [
  { name: "INFY", yahooSymbol: "INFY.NS", fallbackPrice: 1555.45 },
  { name: "ONGC", yahooSymbol: "ONGC.NS", fallbackPrice: 116.8 },
  { name: "TCS", yahooSymbol: "TCS.NS", fallbackPrice: 3194.8 },
  { name: "KPITTECH", yahooSymbol: "KPITTECH.NS", fallbackPrice: 266.45 },
  { name: "QUICKHEAL", yahooSymbol: "QUICKHEAL.NS", fallbackPrice: 308.55 },
  { name: "WIPRO", yahooSymbol: "WIPRO.NS", fallbackPrice: 577.75 },
  { name: "M&M", yahooSymbol: "M&M.NS", fallbackPrice: 779.8 },
  { name: "RELIANCE", yahooSymbol: "RELIANCE.NS", fallbackPrice: 2112.4 },
  { name: "HUL", yahooSymbol: "HINDUNILVR.NS", fallbackPrice: 512.4 }, // note: real ticker differs from watchlist label
];

const fetchRealPrice = async (yahooSymbol) => {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    const data = await response.json();
    const price = data?.chart?.result?.[0]?.meta?.regularMarketPrice;
    return price ?? null;
  } catch (err) {
    console.log(`failed to fetch real price for ${yahooSymbol}`, err.message);
    return null;
  }
};

const seedStocks = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  const today = new Date().toISOString().split("T")[0];
  const seedStockInsert = [];
  for (const stock of stocksSymbol) {
    const realPrice = await fetchRealPrice(stock.yahooSymbol);
    const finalPrice = realPrice ?? stock.fallbackPrice;

    if (realPrice) {
      console.log(` ${stock.name}: fetched real price ₹${realPrice}`);
    } else {
      console.log(`  ${stock.name}: using fallback ₹${stock.fallbackPrice}`);
    }

    seedStockInsert.push({
      name: stock.name,
      price: finalPrice,
      previousPrice: finalPrice,
      dayOpenPrice: finalPrice,
      lastSnapshotDate: today,
    });
  }
  await StockModel.deleteMany({});
  await StockModel.insertMany(seedStockInsert);
  console.log("Stocks seeded successfully");
  mongoose.disconnect();
};

seedStocks();
