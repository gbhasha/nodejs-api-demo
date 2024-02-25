const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

// app.get("/books", async (req, res) => {
//     try {
//       const book = await Book.find({});
//       res.status(200).json(book);
//     } catch (err) {
//       console.log(err.message);
//       (err) => res.status(500).json({ message: err.message });
//     }
//   });

//   app.get("/books/:id", async (req, res) => {
//     const { id } = req.params;

//     try {
//       const book = await Book.findById(id);
//       if (!book || Object.keys(book).length <= 0) {
//         res.status(404).send({
//           message: `Books not found for id ; ${id}`,
//         });
//       } else {
//         res.status(200).json(book);
//       }
//     } catch (err) {
//       console.log(err.message);
//       (err) => res.status(500).json({ message: err.message });
//     }
//   });

//   app.post("/books", async (req, res) => {
//     const payload = req.body;

//     if (!payload || Object.keys(payload).length <= 0) {
//       res.status(418).send({ message: "send the book details in body" });
//     } else {
//       try {
//         const books = await Book.create(payload);
//         res.status(200).json(books);
//       } catch (err) {
//         console.log(err.message);
//         (err) => res.status(500).json({ message: err.message });
//       }
//     }
//   });

//   app.put("/books/:id", async (req, res) => {
//     const { id } = req.params;
//     const payload = req.body;

//     try {
//       const book = await Book.findByIdAndUpdate(id, payload);
//       if (!book || Object.keys(book).length <= 0) {
//         res.status(404).send({
//           message: `Books not found for id ; ${id}`,
//         });
//       } else {
//         const updatedBook = await Book.findById(id);
//         res.status(200).json(updatedBook);
//       }
//     } catch (err) {
//       console.log(err.message);
//       (err) => res.status(500).json({ message: err.message });
//     }
//   });

//   app.delete("/books/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//       const book = await Book.findByIdAndDelete(id);
//       if (!book || Object.keys(book).length <= 0) {
//         res.status(404).send({
//           message: `Books not found for id ; ${id}`,
//         });
//       } else {
//         res.status(200).json(book);
//       }
//     } catch (err) {
//       console.log(err.message);
//       (err) => res.status(500).json({ message: err.message });
//     }
//   });

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.createBook);
router.put("/:id", bookController.updateBookById);
router.delete("/:id", bookController.deleteBookById);

module.exports = router;
