const friendsModel = require('../model/FriendsModel');

module.exports = {
    async addFriend(req, res) {
        try {
            const { userId, friendId } = req.body;
            const newFriend = await friendsModel.addFriend(userId, friendId);
            res.status(201).json(newFriend);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async acceptFriendRequest(req, res) {
        try {
            const { userId, friendId } = req.body;
            const updatedFriend = await friendsModel.acceptFriendRequest(userId, friendId);
            res.status(200).json(updatedFriend);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async rejectFriendRequest(req, res) {
        try {
            const { userId, friendId } = req.body;
            const updatedFriend = await friendsModel.rejectFriendRequest(userId, friendId);
            res.status(200).json(updatedFriend);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getFriends(req, res) {
        try {
            const userId = req.params.userId;
            const friends = await friendsModel.getFriends(userId);
            res.status(200).json(friends);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getFriendRequests(req, res) {
        try {
            const userId = req.params.userId;
            const friendRequests = await friendsModel.getFriendRequests(userId);
            res.status(200).json(friendRequests);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};