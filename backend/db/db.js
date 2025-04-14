import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log('MongoDB connected successfully');
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error); 
  }
};

export default connectDB;