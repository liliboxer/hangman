import getRandomInteger from './get-random-integer.js';

// list of possible words
const possibleWords = ['hello', 'world', 'alchemy', 'programming', 'computer', 
                            'desk', 'pen', 'notebook', 'water', 'monitor'];




// adding events
const guessButton = document.getElementById('guess-button');

// subscribing
guessButton.addEventListener('click', () => {
    const randomInteger = getRandomInteger(9);
   
    console.log(randomInteger);
});





