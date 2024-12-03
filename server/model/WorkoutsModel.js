const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);

module.exports = {
    async getAllWorkouts() {
        try {
            const { data, error } = await supabase
                .from('workouts')
                .select('*');
            if (error) throw new Error(error.message);
            return data;
        } catch (err) {
            console.error('Error fetching all workouts:', err.message);
            throw err;
        }
    },

    async getWorkoutById(id) {
        try {
            const { data, error } = await supabase
                .from('workouts')
                .select('*')
                .eq('id', id);
            if (error) throw new Error(error.message);
            return data;
        } catch (err) {
            console.error('Error fetching workout by ID:', err.message);
            throw err;
        }
    },

    async createWorkout(workout) {
        try {
            console.log('Creating workout:', workout); // Debugging log
            if (!workout.user_id || !workout.title || !workout.date) {
                throw new Error('Missing required fields: user_id, title, and date are mandatory.');
            }
            const { id, created_at, ...workoutData } = workout; // Exclude `id` and `created_at`
            const { data, error } = await supabase
                .from('workouts')
                .insert(workoutData);
            if (error) throw new Error(error.message);
            console.log('Workout created:', data); // Debugging log
            return data;
        } catch (err) {
            console.error('Error creating workout:', err.message);
            throw err;
        }
    },

    async updateWorkout(id, workout) {
        try {
            console.log('Updating workout:', id, workout); // Debugging log
            const { id: workoutId, created_at, ...updateData } = workout; // Exclude `id` and `created_at`
            const { data, error } = await supabase
                .from('workouts')
                .update(updateData)
                .eq('id', id);
            if (error) throw new Error(error.message);
            console.log('Workout updated:', data); // Debugging log
            return data;
        } catch (err) {
            console.error('Error updating workout:', err.message);
            throw err;
        }
    },

    async deleteWorkout(id) {
        try {
            const { data, error } = await supabase
                .from('workouts')
                .delete()
                .eq('id', id);
            if (error) throw new Error(error.message);
            return data;
        } catch (err) {
            console.error('Error deleting workout:', err.message);
            throw err;
        }
    },

    async getWorkoutsByUserId(userId) {
        try {
            const { data, error } = await supabase
                .from('workouts')
                .select('*')
                .eq('user_id', userId);
            if (error) throw new Error(error.message);
            return data;
        } catch (err) {
            console.error('Error fetching workouts by user ID:', err.message);
            throw err;
        }
    }
};