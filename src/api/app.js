   // app.js
   const express = require('express');
   const app = express();
   const userController = require('./controllers/user.controller');

   app.use(express.json()); 

   app.post('/users', userController.userSignup);
   app.get('/users', userController.getUsers);
   app.get('/', (req, res) => {
     res.send('Hello, world!');
   });

   module.exports = app;