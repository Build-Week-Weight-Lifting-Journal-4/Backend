const request = require('supertest'); 
const server = require('../api/server.js');
const db = require('../data/db-config.js');

describe('user-router.js', () => {

    beforeEach(async () => {
        await db('exercise').truncate();
        await db('users').truncate();
    });
    
    describe('POST /users/register', () => {

      it('Should register a new user', () => {
        return request(server)
        .post('/users/register')
        .send({
          "full_name": "james jones",
          "username": "jj2020",
          "password": "test"
        })
        .then(res => {
        expect(res.status).toBe(201);
        })
      })

      it('Should return a JSON object', () => {
        return request(server)
        .post('/users/register')
        .send({
            "full_name": "james jones",
            "username": "jj2020",
            "password": "test"
        })
        .then(res => {
        expect(res.type).toMatch(/json/i);
        });
      });

    });
    
    describe('POST /users/login', () => {

      it('Should result in a successful login', () => {
        return request(server)
        .post('/users/login')
        .send({
            username: "fj2020",
            password: "test"
        })
        .then(res => {
          expect(res.status).toBe(200);
        })
      });

      it('Should returns JSON', () => {
        return request(server)
        .post('/users/login')
        .send({
            username: "fj2020",
            password: "test"
        })
        .then(res => {            
          expect(res.type).toMatch(/json/i);
        });
      });
    });

});  