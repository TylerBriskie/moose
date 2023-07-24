const User = require('../models/User');
const Player = require('../models/Player');
const Game = require('../models/Game');


module.exports = {
  createGame: async (req, res) => {
      // Instantiate a new game

    console.log(req.body);

    const { users } = req.body;

    const newGame = new Game({});
    let newGameId = '';
    try {
        let _ng = await newGame.save();    
        newGameId = _ng._id.toString();

        users.forEach(async (u, i) => {
            const user = await User.findById(u.id) // Find USER in DB
            console.log(user);
            const player = new Player({ user, game: newGameId, score: 0, displayName: u.displayName ?? `Player ${i + 1}`})
            await player.save();
    
        });

        const newPlayers = await Player.find({
            game: newGameId,
        })

        res.status(201).json({
            game: newGame,
            players: newPlayers
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

},
    getAllGames: async(req, res) => {
        console.log('GET ALL GAMES', req);

        try {
          const games = await Game.find({});
          res.json(games);
        } catch (err) {
          res.status(500).json({error: err.message })
        }
    }
}