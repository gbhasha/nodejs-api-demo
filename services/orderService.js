const Order = require("../models/orderModel");

exports.getAllOrders = async () => {
  try {
    const orders = await Order.find({});
    return orders;
  } catch (err) {
    console.log("Error in orderService ", err.message);
    throw err;
  }
};

exports.getOrderById = async (id) => {
  try {
    const order = await Order.findById(id);
    return order;
  } catch (err) {
    console.log("Error in orderService ", err.message);
    throw err;
  }
};

exports.createOrder = async (payload) => {
  try {
    const orders = await Order.create(payload);
    return orders;
  } catch (err) {
    console.log("Error in orderService ", err.message);
    throw err;
  }
};

exports.updateOrderById = async (id, payload) => {
  try {
    const order = await Order.findByIdAndUpdate(id, payload);
    return order;
  } catch (err) {
    console.log("Error in orderService ", err.message);
    throw err;
  }
};

exports.deleteOrderById = async (id) => {
  try {
    const order = await Order.findByIdAndDelete(id);
    return order;
  } catch (err) {
    console.log("Error in orderService ", err.message);
    throw err;
  }
};
