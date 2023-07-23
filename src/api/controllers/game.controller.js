const User = require('../models/User');
const Player = require('../models/Player');

module.exports = {
  createGame: async (req, res) => {
      // Instantiate a new game

    console.log(req);

    const { users } = req.body;

    const newGame = new Game();

    try {
        await newGame.save();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

    users.forEach(async (u, i) => {
        const user = await User.findById(u.id) // Find USER in DB
        console.log(user);
        const player = new Player({ user, game: newGame.id, score: 0, name: u.displayName ?? `Player ${i + 1}`})

    }) 


}
}