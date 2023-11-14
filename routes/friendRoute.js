const express = require('express');
const router = express.Router();
const Friend = require('../models/friends');

router.post('/', async (req, res) => {
    try {
      const newFriendship = await Friend.create(req.body);
      res.status(201).json(newFriendship);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Remove a friend
  router.delete('/:friendshipId', async (req, res) => {
    try {
      const deletedFriendship = await Friend.findByIdAndDelete(req.params.friendshipId);
      if (!deletedFriendship) {
        return res.status(404).json({ message: 'Friendship not found' });
      }
      res.json({ message: 'Friendship deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;