const Book = require("../models/bookModel");

exports.getAllBooks = async () => {
  try {
    const books = await Book.find({});
    return books;
  } catch (err) {
    console.log("Error in bookService ", err.message);
    throw err;
  }
};

exports.getBookById = async (id) => {
  try {
    const book = await Book.findById(id);
    return book;
  } catch (err) {
    console.log("Error in bookService ", err.message);
    throw err;
  }
};

exports.createBook = async (payload) => {
  try {
    const books = await Book.create(payload);
    return books;
  } catch (err) {
    console.log("Error in bookService ", err.message);
    throw err;
  }
};

exports.updateBookById = async (id, payload) => {
  try {
    const book = await Book.findByIdAndUpdate(id, payload);
    return book;
  } catch (err) {
    console.log("Error in bookService ", err.message);
    throw err;
  }
};

exports.deleteBookById = async (id) => {
  try {
    const book = await Book.findByIdAndDelete(id);
    return book;
  } catch (err) {
    console.log("Error in bookService ", err.message);
    throw err;
  }
};
