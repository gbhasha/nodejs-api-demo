const bookService = require("../services/bookService");

exports.getAllBooks = async (req, res) => {
  try {
    const book = await bookService.getAllBooks();
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req?.params;
  try {
    const book = await bookService.getBookById(id);
    if (!book) {
      return res.status(404).send({
        message: `Books not found for id ; ${id}`,
      });
    }
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};

exports.updateBookById = async (req, res) => {
  const { id } = req?.params;
  const payload = req.body;

  try {
    const book = await bookService.updateBookById(id, payload);
    if (!book) {
      return res.status(404).send({
        message: `Books not found for id ; ${id}`,
      });
    }
    const updatedBook = await bookService.getBookById(id);
    res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};
exports.deleteBookById = async (req, res) => {
  const { id } = req?.params;

  try {
    const book = await bookService.deleteBookById(id);

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
};

exports.createBook = async (req, res) => {
  const { id } = req?.params;
  const payload = req.body;

  try {
    const books = await bookService.createBook(payload);

    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    (err) => res.status(500).json({ message: err.message });
  }
};
