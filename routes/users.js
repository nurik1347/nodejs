const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser, getUserById } = require('../controllers/Controllers');

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Get a user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;
