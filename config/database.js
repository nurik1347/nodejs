const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://nurikmirzaev1747:llzK46UxpWDy23nv@cluster0.m6mtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); // Yana kerakli parametrlarni olib tashlang
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
