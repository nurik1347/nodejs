const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database'); // MongoDB ulanishi
const calculateRoutes = require('./routes/calculate'); // Hisoblash routlari
const userRoutes = require('./routes/users'); // Foydalanuvchi routlari
require('dotenv').config(); // .env faylini yuklash

const app = express();

// MongoDB'ga ulanish
connectDB(); // MONGO_URI dan foydalangan holda ulanish

// Middleware
app.use(cors());
app.use(express.json());

// Routelar
app.use('/calculate', calculateRoutes); // Hisoblash
app.use('/users', userRoutes); // Foydalanuvchilar

// Serverni ishga tushirish
const PORT = process.env.PORT || 5003; 
app.listen(PORT, () => {
    console.log(`Your API is running on port ${PORT}`);
});
