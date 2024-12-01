const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();
const { supabase } = require('../model/supabase');

//CRUD operations
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ error: 'Name and role are required.' });
  }

  try {
    console.log(`Updating user ID ${id} with`, { name, role });

    const { data, error } = await supabase
      .from('users')
      .update({ name, role })
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Unhandled server error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});




//Login Functionality
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    console.log('Received login request:', { username, password }); // Debug log
  
    if (!username || !password) {
      console.log('Missing username or password'); // Debug log
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
      console.log('Querying Supabase for username:', username); // Debug log
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
  
      res.json({
        id: user.id,
        username: user.username,
        name: user.name,
        role: user.role,
      });
    } catch (err) {
      console.error('Unhandled server error:', err.message); // Debug log
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
module.exports = router;