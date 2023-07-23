const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game'
  },
  score: {
    type: Number,
    default: 0
  },
  displayName: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Player', PlayerSchema);