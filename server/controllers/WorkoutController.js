const workoutModel = require('../model/WorkoutsModel');

module.exports = {
    async getAllWorkouts(req, res) {
        try {
            const workouts = await workoutModel.getAllWorkouts();
            res.status(200).json(workouts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getWorkoutById(req, res) {
        try {
            const id = req.params.id;
            const workout = await workoutModel.getWorkoutById(id);
            res.status(200).json(workout);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createWorkout(req, res) {
        try {
            const workout = req.body;
            const newWorkout = await workoutModel.createWorkout(workout);
            res.status(201).json(newWorkout);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateWorkout(req, res) {
        try {
            const id = req.params.id;
            const workout = req.body;
            const updatedWorkout = await workoutModel.updateWorkout(id, workout);
            res.status(200).json(updatedWorkout);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteWorkout(req, res) {
        try {
            const id = req.params.id;
            const deletedWorkout = await workoutModel.deleteWorkout(id);
            res.status(200).json(deletedWorkout);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};