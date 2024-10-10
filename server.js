const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database'); // MongoDB ulanish funksiyasini import qilish
require('dotenv').config(); // .env faylini o'qish uchun

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware to enable CORS and parse JSON
app.use(cors());
app.use(express.json()); // JSON ma'lumotlarni parslash

// MongoDB bilan ulanishni boshlash
connectDB().then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection failed:', err);
});

// Product yo'llari
const productRoutes = require('./routes/products');
app.use('/products', productRoutes); // Barcha mahsulot yo'llari '/products' ga tegishli bo'ladi

// Default route (for testing the server status)
app.get('/', (req, res) => {
    res.json({ message: "Server is running" });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
