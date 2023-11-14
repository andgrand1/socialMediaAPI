const express = require('express');
const router = express.Router();
const Reaction = require('../models/Reaction');

router.get('/', async (req, res) => {
    try {
      const reactions = await Reaction.find();
      res.json(reactions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post('/', async (req, res) => {
    try {
      const newReaction = await Reaction.create(req.body);
      res.status(201).json(newReaction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete a reaction by ID
  router.delete('/:reactionId', async (req, res) => {
    try {
      const deletedReaction = await Reaction.findByIdAndDelete(req.params.reactionId);
      if (!deletedReaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }
      res.json({ message: 'Reaction deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;