const orderService = require("../services/orderService");

exports.getAllOrders = async (req, res) => {
  try {
    const order = await orderService.getAllOrders();
    res.status(200).json(order);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  const { id } = req?.params;
  try {
    const order = await orderService.getOrderById(id);
    if (!order) {
      return res.status(404).send({
        message: `Orders not found for id ; ${id}`,
      });
    }
    res.status(200).json(order);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};

exports.updateOrderById = async (req, res) => {
  const { id } = req?.params;
  const payload = req.body;

  try {
    const order = await orderService.updateOrderById(id, payload);
    if (!order) {
      return res.status(404).send({
        message: `Orders not found for id ; ${id}`,
      });
    }
    const updatedOrder = await orderService.getOrderById(id);
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};
exports.deleteOrderById = async (req, res) => {
  const { id } = req?.params;

  try {
    const order = await orderService.deleteOrderById(id);

    if (!order || Object.keys(order).length <= 0) {
      res.status(404).send({
        message: `Orders not found for id ; ${id}`,
      });
    } else {
      res.status(200).json(order);
    }
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};

exports.createOrder = async (req, res) => {
  const { id } = req?.params;
  const payload = req.body;

  try {
    const orders = await orderService.createOrder(payload);

    res.status(200).json(orders);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};
