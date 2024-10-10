const express = require('express');
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct, getProductById } = require('../Controllers/Controllers');

// Create a new product
router.post('/create', createProduct);

// Get all products
router.get('/', getProducts);

// Get a product by ID
router.get('/:id', getProductById);

// Update a product by ID
router.put('/:id', updateProduct);

// Delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
