// function to return the number of characters in name
function getCountLetters(name) {
    return name.length;
}

// function to return the first character in name
function getFirstLetter(name) {
    return name[0];
}
// function to return the last character in name
function getLastLetter(name) {
    return name[name.length - 1];
}

// function to return the name in lower case
function getLower(name) {
    return name.toLowerCase();
}

// function to return the name in capital letters
function getUpper(name) {
    return name.toUpperCase();
}

// function to capitalize the first letter of name
function getCapital(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

// function to return name without leading or trailing spaces
function getTrim(name) {
    return name.trim(name);
}

const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const answer7 = document.querySelector('#answer7');

const name = document.querySelector('#name');

name.addEventListener("keyup", () => {
    const value = name.value;

    answer1.textContent = getCountLetters(value);
    answer2.textContent = getFirstLetter(value);
    answer3.textContent = getLastLetter(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapital(value); 
    } else {
        answer6.textCOntent = "";
    }
    answer7.textContent = getTrim(value);

});