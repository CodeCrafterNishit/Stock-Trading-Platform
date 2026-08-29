const mongoose = require("mongoose");
const {OrdersSchema} = require("../schemas/OrderSchema");

const OrdersModel = mongoose.model("order",OrdersSchema);

module.exports = {OrdersModel}