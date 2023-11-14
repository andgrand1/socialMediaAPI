const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const reactionRoutes = require('./routes/reactionRoutes');
const friendRoutes = require('./routes/friendRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/friends', friendRoutes);

mongoose.connect('mongodb://localhost:27017/social_network', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});