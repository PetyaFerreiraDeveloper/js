const validatePass = require('./validatePass');

test('returns false given an empty string', () => {
    expect(validatePass('')).toBe(false);
});

test('returns true given a password has more than 8 char, and has letters, and has numbers', () => {
    expect(validatePass('123456dsad')).toBe(true);
    expect(validatePass('123456ASF')).toBe(true);
    expect(validatePass('123456ASFas')).toBe(true);
});

test('return false given the password has 8 characters but has no letters', () => {
    expect(validatePass('134564654646')).toBe(false);
});

test('return false given the password has 8 characters but has no numbers', () => {
    expect(validatePass('abcddksjdflkds')).toBe(false);
});

test('return false given the password has 8 capital letters but has no numbers', () => {
    expect(validatePass('ABVFDGTFTYFTY')).toBe(false);
});

test('return false given the password has capital letters and numbers, but is too short', () => {
    expect(validatePass('ASD3')).toBe(false);
});

