import { describe } from 'node:test';
import supertest from 'supertest';
import app from './app';

describe('POST /users', () => {

    describe('given a username and password', () => {
        // should save the username and password to the database
        // should respond with a json object containing the user id
        test('should respond with status code 200', async () => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            });
            expect(response.statusCode).toBe(200);
        })
        // should specify json in the content type header
    });

    describe('when the username and password are missing', () => {
        // should respond with status code 400
    })
});
