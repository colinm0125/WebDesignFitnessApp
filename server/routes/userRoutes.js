const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const auth = require('../middlewares/auth');

// CRUD operations
router.get('/', auth, userController.getAllUsers);
router.get('/:id', auth, userController.getUserById);
router.post('/', auth, userController.createUser);
router.delete('/:id', auth, userController.deleteUser);
router.put('/:id', auth, userController.updateUser);

// Login Functionality
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        console.log('Received login request:', { username, password }); // Debug log
        const { data: users, error } = await supabase
            .from('users')
            .select('*')
            .eq('username', username);

        if (error) {
            console.error('Error querying Supabase:', error.message); // Debug log
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (!users || users.length === 0) {
            console.log('User not found'); // Debug log
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = users[0];
        console.log('User retrieved from database:', user); // Debug log

        const isPasswordValid = await argon2.verify(user.password, password);
        console.log('Password validation result:', isPasswordValid); // Debug log

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            id: user.id,
            username: user.username,
            name: user.name,
            role: user.role,
            token,
        });
    } catch (err) {
        console.error('Unhandled server error:', err.message); // Debug log
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;