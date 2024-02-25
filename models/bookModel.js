const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {

    author: {
      type: String,
      required: [true, "please enter author"],
    },
    author: {
      type: String,
      required: [true, "please enter author"],
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
