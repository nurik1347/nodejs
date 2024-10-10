const express = require('express');
const router = express.Router();

// POST /api/calculate
router.post('/', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ message: 'Both num1 and num2 are required' });
    }

    const sum = num1 + num2;
    res.json({ sum });
});

module.exports = router;
