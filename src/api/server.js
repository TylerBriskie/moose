   // server.js
   const app = require('./app');
   const port = process.env.NODE_ENV === 'test' ? 3000 : 4200;

   const mongoose = require('mongoose');

   require('dotenv').config();
   mongoose.connect(process.env.DB_CONN_STR, { useNewUrlParser: true, useUnifiedTopology: true });
   
   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', () => {
      console.log("Connection Successful!");
    });
   

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
