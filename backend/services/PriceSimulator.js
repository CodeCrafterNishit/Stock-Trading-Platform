const { StockModel } = require("../model/StockModel");

const startPriceSimulator = () => {
  setInterval(async () => {
    const stocks = await StockModel.find();
    for (const stock of stocks) {
      const changePercent = (Math.random() * 2 - 1) * 0.01;
      stock.previousPrice = stock.price; 
      stock.price = parseFloat((stock.price * (1 + changePercent)).toFixed(2));
      await stock.save();
    }
  }, 10000);
};

module.exports = startPriceSimulator;
