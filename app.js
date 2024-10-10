const express = require('express');
const cors = require('cors');
const connectDB = require('./server'); // MongoDB ulanish funksiyasini import qilish
require('dotenv').config(); // .env faylini o'qish uchun

const app = express();
const PORT = process.env.PORT || 5003;

// Middleware to enable CORS and parse JSON
app.use(cors());
app.use(express.json()); // to parse incoming JSON

// Route to handle user data
app.post('/user', (req, res) => {
    const { img, title } = req.body;

    // Check if all necessary data is provided
    if (img && title) {
        res.json({
            message: "Foydalanuvchi muvaffaqiyatli qabul qilindi",
            user: {
                img: img,
                title: title,
            }
        });
    } else {
        res.status(400).json({ error: "Ism, yosh yoki familiya yetishmayapti" });
    }
});

// Default route (for testing the server status)
app.get('/', (req, res) => {
    res.json({ message: "Server is running" });
});

// MongoDB bilan ulanishni boshlash va serverni ishga tushirish
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Database connection failed", err);
});
