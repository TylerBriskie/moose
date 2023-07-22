   // index.test.js
   const request = require('supertest');
   const app = require('../api/app');

   describe('GET /', () => {
     test('should respond with "Hello, world!"', async () => {
       const response = await request(app).get('/');
       expect(response.status).toBe(200);
       expect(response.text).toBe('Hello, world!');
     });
   });
