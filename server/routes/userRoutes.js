const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const { login } = require('../controllers/UserController');

// CRUD operations
router.get('/', auth, userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.post('/', auth, userController.createUser);
router.delete('/:id', auth, userController.deleteUser);
router.put('/:id', auth, userController.updateUser);

router.post('/login', login);

module.exports = router;