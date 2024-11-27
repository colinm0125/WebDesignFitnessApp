const { getConnection } = require('./supabase')

const UserModel = {
    async getAllUsers() {  
        const supabase = getConnection()
        const { data, error } = await supabase
            .from('users')
            .select('*')
        if (error) throw new Error(error.message)
        return data;
    },

    async getUserById(userId) {
        const supabase = getConnection();
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
        if (error) throw new Error(error.message)
        return data;
    },

    async createUser(user) {
        const supabase = getConnection();
        const { data, error } = await supabase
            .from('users')
            .insert(user)
        if (error) throw new Error(error.message)
        return data;
    },

    async deleteUser(userId) {
        const supabase = getConnection();
        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', userId)
        if (error) throw new Error(error.message)
        return data;
    }
};
module.exports = UserModel;