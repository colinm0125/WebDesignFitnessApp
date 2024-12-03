//Model to habndle the CRUD opeartations on the Posted workouts database.

const {createClient}=require('@supabase/supabase-js');
require('dotenv').config({path:'../.env'});
/**
 * @typedef {import('@supabase/supabase-js').SupabaseClient} SupabaseClient
 */

const supabase=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SECRET_KEY);

module.exports={

    async getAllWorkouts(){
        const {data,error}=await supabase
        .from('workouts')
        .select('*');
        if(error){
            throw new Error(error.message);
        }
        return data;
    },

    async getWorkoutById(id){
        const {data,error}=await supabase
        .from('workouts')
        .select('*')
        .eq('id',id);
        if(error){
            throw new Error(error.message);
        }
        return data;
    },

    async createWorkout(workout){
        const {id,...workoutNoId}=workout;
        const {data,error}=await supabase
        .from('workouts')
        .insert(workout);
        if(error){
            throw new Error(error.message);
        }
        return data;
    },
    
    async updateWorkout(id,workout){
        const {data,error}=await supabase
        .from('workouts')
        .update([
            {
                name:workout.name,
                description:workout.description,
                sets:workout.sets,
                reps:workout.reps,
                weight:workout.weight,
                userId:workout.userId
            }
        ])
        .eq('id',id);
        if(error){
            throw new Error(error.message);
        }
        return data;
    },

    async deleteWorkout(id){
        const {data,error}=await supabase
        .from('workouts')
        .delete()
        .eq('id',id);
        if(error){
            throw new Error(error.message);
        }
        return data;
    },

    async getWorkoutsByUserId(userId){
        const {data,error}=await supabase
        .from('workouts')
        .select('*')
        .eq('userId',userId);
        if(error){
            throw new Error(error.message);
        }
        return data;
    }

};



