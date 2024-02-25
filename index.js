const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/bookModel");
const Order = require("./models/orderModel");

const app = express();

const PORT = 8081;

app.use(express.json());

// to accept data from forms
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, welcome to NODE API...");
});
// Books management service

app.get("/books", async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (!book || Object.keys(book).length <= 0) {
      res.status(404).send({
        message: `Books not found for id ; ${id}`,
      });
    } else {
      res.status(200).json(book);
    }
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

app.post("/books", async (req, res) => {
  const payload = req.body;

  if (!payload || Object.keys(payload).length <= 0) {
    res.status(418).send({ message: "send the book details in body" });
  } else {
    try {
      const books = await Book.create(payload);
      res.status(200).json(books);
    } catch (err) {
      console.log(err.message);
      (err) => res.status(500).json({ message: err.message });
    }
  }
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id, payload);
    if (!book || Object.keys(book).length <= 0) {
      res.status(404).send({
        message: `Books not found for id ; ${id}`,
      });
    } else {
      const updatedBook = await Book.findById(id);
      res.status(200).json(updatedBook);
    }
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book || Object.keys(book).length <= 0) {
      res.status(404).send({
        message: `Books not found for id ; ${id}`,
      });
    } else {
      res.status(200).json(book);
    }
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

// Orders Management Service

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

app.get("/orders/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);
    if (!order) {
      res.status(404).send({
        message: `orders not found for id ; ${id}`,
      });
    }
    res.status(200).json(order);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

app.post("/orders", async (req, res) => {
  const payload = req.body;

  if (!payload || Object.keys(payload).length <= 0) {
    res.status(418).send({ message: "send the order details in body" });
  } else {
    try {
      const order = await Order.create(payload);
      res.status(200).json(order);
    } catch (err) {
      console.log(err.message);
      (err) => res.status(500).json({ message: err.message });
    }
  }
});

app.put("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  if (!payload || Object.keys(payload).length <= 0) {
    res.status(418).send({ message: "send the orders details in body" });
  } else {
    try {
      const order = await Order.findByIdAndUpdate(id, payload);
      if (!order) {
        return res.status(404).send({
          message: `orders not found for id ; ${id}`,
        });
      }
      const updatedOrder = await Order.findById(id);
      res.status(200).json(updatedOrder);
    } catch (err) {
      console.log(err.message);
      (err) => res.status(500).json({ message: err.message });
    }
  }
});

app.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).send({
        message: `orders not found for id ; ${id}`,
      });
    }
    res.status(200).json(order);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.qqqidi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connectb to DB"))
  .catch((e) => console.log("Error connecting to DB", e));
