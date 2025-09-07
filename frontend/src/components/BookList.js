import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);  // Store books
  const [search, setSearch] = useState('');  // Store search term

  // Fetch books when component loads
  useEffect(() => {
    fetchBooks();
  }, []);  // Empty array means run once

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/books`);
      setBooks(res.data);  // Update state
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  // Borrow function
  const borrowBook = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/books/borrow/${id}`);
      fetchBooks();  // Refresh list
    } catch (err) {
      console.error('Error borrowing:', err);
    }
  };

  // Return function
  const returnBook = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/books/return/${id}`);
      fetchBooks();
    } catch (err) {
      console.error('Error returning:', err);
    }
  };

  // Filter books based on search
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||  // Search title
    book.author.toLowerCase().includes(search.toLowerCase())   // Search author
  );

  return (
    <div>
      <h2>Available Books</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}  // Update search
      />
      <ul>
        {filteredBooks.map(book => (  // Loop over books
          <li key={book._id}>
            {book.title} by {book.author} (ISBN: {book.isbn})
            <button onClick={() => borrowBook(book._id)}>Borrow</button>
            <button onClick={() => returnBook(book._id)}>Return</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;