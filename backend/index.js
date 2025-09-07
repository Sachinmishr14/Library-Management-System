const express = require('express');  // For building the server
const mongoose = require('mongoose');  // For connecting to database
const dotenv = require('dotenv');  // For reading .env file
const cors = require('cors');  // Allows frontend to talk to backend

dotenv.config();  // Loads .env variables

const app = express();  // Creates the app
app.use(express.json());  // Helps read JSON data from requests
app.use(cors());  // Allows connections from other apps (like frontend)

// Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully!'))  // Success message
  .catch(err => console.log('Error connecting to MongoDB:', err));  // Error message

// We'll add routes here later

const PORT = process.env.PORT || 5000;  // Port number from .env
const bookRoutes = require('./routes/books');
app.use('/api', bookRoutes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));  // Starts the server