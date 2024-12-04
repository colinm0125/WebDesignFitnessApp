const express = require('express');
const friendsController = require('../controllers/FriendsController');
const router = express.Router();

// CRUD operations for friends
router.post('/add', friendsController.addFriend);
router.post('/accept', friendsController.acceptFriendRequest);
router.post('/reject', friendsController.rejectFriendRequest);
router.get('/:userId/friends', friendsController.getFriends);
router.get('/:userId/requests', friendsController.getFriendRequests);

module.exports = router;