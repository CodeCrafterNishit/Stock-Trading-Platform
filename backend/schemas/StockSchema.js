const { Schema } = require("mongoose");

const StockSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
});

module.exports = { StockSchema };
