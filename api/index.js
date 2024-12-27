import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

import authRouter from './routes/auth.route.js';

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

app.use(express.json());

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})