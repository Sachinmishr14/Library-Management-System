import React, { useState } from 'react';  // Import React and state hook
import axios from 'axios';  // For API calls

const AddBook = () => {
  // States to hold input values
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  // Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload
    try {
      // Send data to backend
      await axios.post('http://localhost:5000/api/books', { title, author, isbn });
      alert('Book added successfully!');  // Show success
      setTitle(''); setAuthor(''); setIsbn('');  // Clear inputs
    } catch (err) {
      console.error('Error adding book:', err);  // Log error
    }
  };

  return (
    <form onSubmit={handleSubmit}>  
      <h2>Add New Book</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;