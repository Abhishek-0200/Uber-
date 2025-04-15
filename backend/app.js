import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';



dotenv.config();  

const app = express();

app.use(cookieParser()); // Middleware to parse cookies
app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use('/api/users', userRoutes); // Use user routes
connectDB(); // Connect to MongoDB

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

export default app;