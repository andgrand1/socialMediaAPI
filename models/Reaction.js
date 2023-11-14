const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
