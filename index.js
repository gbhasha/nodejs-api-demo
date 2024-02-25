const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/bookModel");
const Order = require("./models/orderModel");

const { logger } = require("./middlewares/middleware");

const bookRoutes = require("./routes/bookRoute");
const orderRoutes = require("./routes/orderRoute");

const app = express();

const PORT = 8081;

// middleware to handle json response
app.use(express.json());
// to accept data from forms
app.use(express.urlencoded({ extended: false }));
// logger
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello, welcome to NODE API...");
});
// Books management service
app.use("/books", bookRoutes);

// Orders Management Service
app.use("/orders", orderRoutes);

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.qqqidi8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connectb to DB"))
  .catch((e) => console.log("Error connecting to DB", e));
