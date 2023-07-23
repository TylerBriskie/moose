const User = require('../models/User');

module.exports = {
  getPlayerDetails: async (req, res) => {
      // Instantiate a new game

    console.log(req);

    const {playerId } = req.body;
    
    try {
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
},
getUsers: async (req, res) => {
  console.log(req);
  res.status(200).json({status: 'ok'})
}
}