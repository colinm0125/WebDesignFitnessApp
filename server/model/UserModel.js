const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });
const argon2 = require('argon2');

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
        const { id, ...userNoId } = user; // Destructure the ID from the user object
        const { data, error } = await supabase
            .from('users')
            .insert([
                {
                    name: user.name,
                    username: user.username,
                    password: await argon2.hash(user.password),
                    role: user.role
                }
            ]);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async updateUser(id, user) {
        const updateData = {
            name: user.name,
            username: user.username,
            role: user.role
        };

        // Only update the password if it's provided
        if (user.password) {
            updateData.password = await argon2.hash(user.password);
        }

        const { data, error } = await supabase
            .from('users')
            .update(updateData)
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