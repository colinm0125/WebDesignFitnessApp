const express = require('express');
const workoutController = require('../controllers/WorkoutController');
const router = express.Router();

/**
 * CRUD Operations for Workouts
 */

// GET all workouts
router.get('/', async (req, res) => {
  try {
    await workoutController.getAllWorkouts(req, res);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// GET a workout by ID
router.get('/:id', async (req, res) => {
  try {
    await workoutController.getWorkoutById(req, res);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workout by ID' });
  }
});

// POST a new workout
router.post('/', async (req, res) => {
  try {
    await workoutController.createWorkout(req, res);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add workout' });
  }
});

// DELETE a workout by ID
router.delete('/:id', async (req, res) => {
  try {
    await workoutController.deleteWorkout(req, res);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

// PUT (update) a workout by ID
router.put('/:id', async (req, res) => {
  try {
    await workoutController.updateWorkout(req, res);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update workout' });
  }
});

module.exports = router;
