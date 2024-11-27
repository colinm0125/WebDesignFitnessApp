const UserModel = require('../model/UserModel');

const UserController = {
    async getAllUsers(req, res) {
        try {
            const users = await UserModel.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await UserModel.getUserById(userId);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createUser(req, res) {
        try {
            const user = req.body;
            const newUser = await UserModel.createUser(user);
            res.json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const user = await UserModel.deleteUser(userId);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const user = req.body;
            const updatedUser = await UserModel.updateUser(userId, user);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = UserController;
