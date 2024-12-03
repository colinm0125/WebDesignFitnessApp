const express = require('express');
const workoutController = require('../controllers/WorkoutController');
const router = express.Router();
const { supabase } = require('../model/supabase');
console.log('Supabase:', supabase);


//CRUD operations
router.get('/', workoutController.getAllWorkouts);
router.get('/:id', workoutController.getWorkoutById);
router.post('/', workoutController.createWorkout);
router.delete('/:id', workoutController.deleteWorkout);
router.put('/:id', workoutController.updateWorkout);
module.exports = router;