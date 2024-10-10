const Product = require('../Models/Product'); // Modelni import qilish

// Create new product
const createProduct = async (req, res) => {
    const { img, title } = req.body;

    if (!img || !title) {
        return res.status(400).json({ message: 'Bad Request: Missing data' });
    }

    try {
        const newProduct = new Product({ img, title });
        await newProduct.save();
        res.status(201).json({ data: newProduct });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ data: products });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ data: product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update product by ID
const updateProduct = async (req, res) => {
    const { title } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { title },
            { new: true, runValidators: true }
        );

        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.json({ data: product });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };
