import React, { useContext } from 'react';  // Add useContext
import { AuthContext } from './context/AuthContext';  // Import context
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import './App.css';

function App() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);  // Get from context

  return (
    <div className="App">
      <h1>Library Management System</h1>
      {!isLoggedIn ? (  // If not logged in
        <button onClick={login}>Login</button>
      ) : (  // If logged in
        <>
          <button onClick={logout}>Logout</button>
          <AddBook />
          <BookList />
        </>
      )}
    </div>
  );
}

export default App;
