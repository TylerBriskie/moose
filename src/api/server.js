   // server.js
   const app = require('./app');
   const port = process.env.NODE_ENV === 'test' ? 3000 : 4200;

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
