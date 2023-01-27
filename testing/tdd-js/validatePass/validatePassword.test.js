const validatePassword = require('./validatePassword');

test('returns false for empty string', () => {
    expect(validatePassword('')).toBe(false)
})
test('returns false if password doesnt have letter', () => {
    expect(validatePassword('123456')).toBe(false)
})
test('returns false if password doesnt have number', () => {
    expect(validatePassword('adfdsfdfsfsds')).toBe(false)
})
test('returns false if password is shorter than 8 characters', () => {
    expect(validatePassword('adsfs')).toBe(false)
})
test('returns true if password have both numbers and letters and is longer than 8 characters', () => {
    expect(validatePassword('adsafdsf123456')).toBe(true)
})
test('returns true if password has both capital and small letters and numbers and is longer than 8 characters', () => {
    expect(validatePassword('adsafdssADSFDFf123456')).toBe(true)
})
test('returns true if password contains only big letters and numbers and is longer than 8 characters', () => {
    expect(validatePassword('ADSFDFf123456')).toBe(true)
})