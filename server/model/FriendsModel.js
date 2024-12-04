const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY);

module.exports = {
    async addFriend(userId, friendId) {
        const { data, error } = await supabase
            .from('friends')
            .insert([{ user_id: userId, friend_id: friendId }]);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async acceptFriendRequest(userId, friendId) {
        const { data, error } = await supabase
            .from('friends')
            .update({ status: 'accepted', updated_at: new Date() })
            .eq('user_id', userId)
            .eq('friend_id', friendId);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async rejectFriendRequest(userId, friendId) {
        const { data, error } = await supabase
            .from('friends')
            .update({ status: 'rejected', updated_at: new Date() })
            .eq('user_id', userId)
            .eq('friend_id', friendId);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    },
    async getFriends(userId) {
        const { data, error } = await supabase
            .from('friends')
            .select('friend_id')
            .eq('user_id', userId)
            .eq('status', 'accepted');
        if (error) {
            throw new Error(error.message);
        }
        return data.map(friend => friend.friend_id);
    },
    async getFriendRequests(userId) {
        const { data, error } = await supabase
            .from('friends')
            .select('*')
            .eq('friend_id', userId)
            .eq('status', 'pending');
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
};