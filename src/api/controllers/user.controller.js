const User = require('../models/User');

module.exports = {
  userSignup: async (req, res) => {
      // Create a new user

    console.log(req);

    const { name, email, password } = req.body;
    let user = new User({ name, email, password });

    try {
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
},
getAllUsers: async (req, res) => {
  console.log('GET ALL USERS', req);

  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({error: err.message })
  }
}
}