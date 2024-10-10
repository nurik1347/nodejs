const User = require('../Models/User');

// Create new user
const createUser = async (req, res) => {
    const { img, title } = req.body;

    if (!img || !title) {
        return res.status(400).json({ message: 'Bad Request: Missing data' });
    }

    try {
        const newUser = new User({ img, title });
        await newUser.save();
        res.status(201).json({ data: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ data: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    const { title } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { title },
            { new: true, runValidators: true }
        );

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ data: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete user by ID
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
