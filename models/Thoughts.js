const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280, 
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
