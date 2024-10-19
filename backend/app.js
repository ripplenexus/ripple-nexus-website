const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const formRoutes = require('./routes/form');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Routes
app.use('/api', formRoutes);  // Route for form submissions

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
