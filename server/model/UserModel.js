const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({path: '../.env'});
/**
 * @typedef {import('@supabase/supabase-js').SupabaseClient} SupabaseClient
 */

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);

module.exports = {
    async getAllUsers() {
        const { data, error } = await supabase
            .from('users')
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async getUserById(id) {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async createUser(user) {
        const { id, ...userNoId } = user; //Destructure the ID from the user object
        const { data, error } = await supabase
            .from('users')
            .insert(user);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async updateUser(id, user) {
        const { data, error } = await supabase
            .from('users')
            .update(user)
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async deleteUser(id) {
        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', id);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
};