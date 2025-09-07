const express = require('express');
const router = express.Router();  // Creates a router for APIs
const Book = require('../models/Book');  // Import the Book model

// Add a new book (POST request)
router.post('/books', async (req, res) => {
  try {
    const { title, author, isbn } = req.body;  // Get data from request
    const newBook = new Book({ title, author, isbn });  // Create new book
    await newBook.save();  // Save to database
    res.status(201).json(newBook);  // Send back the book
  } catch (err) {
    res.status(500).json({ message: err.message });  // Error if fails
  }
});

// Get all available books (GET request)
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({ availability: true });  // Find available books
    res.json(books);  // Send them back
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Borrow a book (PUT request to update)
router.put('/books/borrow/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);  // Find book by ID
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (!book.availability) return res.status(400).json({ message: 'Book already borrowed' });
    
    book.availability = false;  // Mark as borrowed
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Return a book (PUT request)
router.put('/books/return/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.availability) return res.status(400).json({ message: 'Book already available' });
    
    book.availability = true;  // Mark as available
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;  // Export the router