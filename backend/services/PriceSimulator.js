const { StockModel } = require("../model/StockModel");

const startPriceSimulator = () => {
  setInterval(async () => {
    const stocks = await StockModel.find();
    const today = new Date().toISOString().split("T")[0];
    for (const stock of stocks) {
      if (stock.lastSnapshotDate !== today) {
        stock.dayOpenPrice = stock.price;
        stock.lastSnapshotDate = today;
      }
      const changePercent = (Math.random() * 2 - 1) * 0.01;
      stock.previousPrice = stock.price;
      stock.price = parseFloat((stock.price * (1 + changePercent)).toFixed(2));
      await stock.save();
    }
  }, 10000);
};

module.exports = startPriceSimulator;
