import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const mongoURI = process.env.MONGO_URI;

// Ensure MONGO_URI is defined
if (!mongoURI) {
  console.error('Error: MONGO_URI is not defined in the environment variables');
  process.exit(1); // Exit the process if no URI is found
} 


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  }); 

const app = express();

// Optional: Add middleware for handling JSON payloads
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 3000; // Allow dynamic port assignment if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
