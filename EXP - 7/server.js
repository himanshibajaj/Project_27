import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// sample data
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// Root route (optional) — helpful to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("API server is running. Use /api/books");
});

// GET - all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// POST - add book
app.post("/api/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json({ message: "Book added successfully", data: newBook });
});

// PUT - update book
app.put("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  book.title = req.body.title ?? book.title;
  book.author = req.body.author ?? book.author;
  res.json({ message: "Book updated", data: book });
});

// DELETE - remove book
app.delete("/api/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

app.listen(4000, () => console.log("✅ Server running on http://localhost:4000"));
//http://localhost:4000/api/books - postman url
//{ "title": "The Alchemist", "author": "Paulo Coelho" }  POST request body example
//{ "title": "Harry Potter and the Chamber" } PUT update request body example url : http://localhost:4000/api/books/1

