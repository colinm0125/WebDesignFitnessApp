const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const { login } = require('../controllers/UserController');

// CRUD operations
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);

router.post('/login', login);

router.get('/autocomplete', userController.getUserSuggestions);

module.exports = router;