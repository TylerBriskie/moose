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
  // other actions...
},
getUsers: async (req, res) => {
  console.log(req);
  res.status(200).json({status: 'ok'})
}
}