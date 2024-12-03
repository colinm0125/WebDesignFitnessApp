const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/users', userRoutes); // Prefix all user-related routes with '/users'
app.use('/workouts',workoutRoutes); // Prefix all workout-related routes with '/workouts'

// Test route for health check
app.get('/', (req, res) => {
  res.send('Server is running and healthy!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
