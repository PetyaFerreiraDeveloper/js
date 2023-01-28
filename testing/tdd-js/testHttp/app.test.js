const request = require('supertest');
const app = require('./app');

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
        });

        test('should specify json in the content type header', async () => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            });
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });

        test('response has UserId', async () => {
            const response = await request(app).post('/users').send({
                username: 'username',
                password: 'password'
            });
            expect(response.body.userId).toBeDefined();
        })


    });

    describe('when the username and password are missing', () => {
        test('should respond with status code 400', async () => {
            const bodyData = [
                {username: 'username'},
                {password: 'password'},
                {}
            ]
            for (const body of bodyData) {
                const response = await request(app).post('/users').send(body);
                expect(response.statusCode).toBe(400);
            }
            
        })
    })
});
