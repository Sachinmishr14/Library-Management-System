# Library Management System

This is a Full Stack Development project created for the Datachron Solutions Private Limited internship assignment. It’s a simple Library Management System built using Node.js and Express for the backend, MongoDB as the database, and React for the frontend. The project allows users to add, view, search, borrow, and return books, with a basic login/logout feature.

## Features
- Add New Book: Add a book with title, author, and ISBN.
- View Available Books: Display a list of available books.
- Search Books: Search by title or author.
- Borrow Book: Mark a book as borrowed (updates availability).
- Return Book: Mark a book as available again.
- Login/Logout: Basic authentication to access features.

## Technologies Used
- Backend: Node.js, Express.js, Mongoose (MongoDB ORM)
- Frontend: React.js, Axios (for API calls)
- Database: MongoDB (local or Atlas)
- Styling: CSS with responsive design

## Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB (local installation or MongoDB Atlas account)
- Git (for cloning the repository)

## Installation and Setup

### Clone the Repository
`bash
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system

# Navigate to the project folder
cd library-management-system

# Set up the backend
cd backend
npm install
node index.js &

# Set up and start the frontend in a new terminal session
cd ../frontend
npm install
npm start
