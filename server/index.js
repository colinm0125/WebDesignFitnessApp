const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(__dirname + '/public')); // Serve static files from the 'public' directory

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
