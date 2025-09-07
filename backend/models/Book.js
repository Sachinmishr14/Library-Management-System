const mongoose = require('mongoose');  // Import database tool

// Define what a book looks like
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },  // Book title, must have
  author: { type: String, required: true },  // Author name, must have
  isbn: { type: String, required: true, unique: true },  // Unique ISBN number
  availability: { type: Boolean, default: true }  // True if available, false if borrowed
});

module.exports = mongoose.model('Book', bookSchema);  // Export for use elsewhere