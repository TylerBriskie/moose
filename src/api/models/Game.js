const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    players: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
    }],

    startDate: {
      type: Date,
      default: Date.now
    },
    lastTurnDate: {
      type: Date,
      default: Date.now
    },
    recentlyGuessed: [{
      type: String
    }],
    gameWinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }
  });

module.exports = mongoose.model('Game', GameSchema);