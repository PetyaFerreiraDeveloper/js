function validatePass(password) {
    const validLength = password.length >= 8;
    const containsLetter = /[a-zA-Z]/g.test(password);
    const containsNumber = /[0-9]/g.test(password);

    return validLength && containsLetter && containsNumber;
}

validatePass('564646646A');
module.exports = validatePass;