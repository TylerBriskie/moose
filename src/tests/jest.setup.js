const request = require('supertest');

const agent = request.agent(`http://localhost:3001`);

global.request = agent;
