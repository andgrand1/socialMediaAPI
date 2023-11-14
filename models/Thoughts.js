const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reaction',
  }],
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});


thoughtSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleString(); // Customize the formatting as needed
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
