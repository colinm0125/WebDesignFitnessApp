const userModels = require('../model/UserModel');
const argon2 = require('argon2');


module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await userModels.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getUserById(req, res) {
        try {
            const id = req.params.id;
            const user = await userModels.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async createUser(req, res) {
        try {
            const user = req.body;
            const newUser = await userModels.createUser(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
  }
    },
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const user = req.body;
            const updatedUser = await userModels.updateUser(id, user);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
  }
    },
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const deletedUser = await userModels.deleteUser(id);
            res.status(200).json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await userModels.getUserByUsername(username);

            if (!user) {
                return res.status(400).json({ error: 'Invalid username or password.' });
            }

            const validPassword = await argon2.verify(user.password, password);

            if (!validPassword) {
                return res.status(400).json({ error: 'Invalid username or password.' });
            }

            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

async getUserSuggestions(req, res) {
    try {
        const { q } = req.query;
        const users = await UserActivation.find({ username: { $regex: q, $options: 'i' } }).limit(10);
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
};