   // app.js
   const express = require('express');
   const app = express();
   const userController = require('./controllers/user.controller');
   const gameController = require('./controllers/game.controller');

   app.use(express.json()); 

   app.get('/', (req, res) => {
     res.send('Hello, world!');
   });

   // USERS
   app.post('/users', userController.userSignup);
   app.get('/users', userController.getAllUsers);


   // GAMES
   app.post('/games', gameController.createGame);
   app.get('/games', gameController.getAllGames);

   module.exports = app;