const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// Define routes for user-related operations
router.get('/', UserController.getAllUsers); // Get all users
router.get('/:id', UserController.getUserById); // Get user by ID
router.post('/', UserController.createUser); // Create a new user
router.put('/:id', UserController.updateUser); // Update an existing user
router.delete('/:id', UserController.deleteUser); // Delete a user by ID

module.exports = router;
