const subtract = require('./subtract');

test('properly subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
})