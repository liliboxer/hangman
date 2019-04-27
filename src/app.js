import getRandomInteger from './get-random-integer.js';
import getWord from './get-word.js';

// list of possible words
const possibleWords = ['hello', 'world', 'alchemy', 'programming', 'computer', 
'desk', 'pen', 'notebook', 'water', 'monitor'];




// adding events
const guessButton = document.getElementById('guess-button');

// subscribing
guessButton.addEventListener('click', () => {
    const randomInteger = getRandomInteger(9);
    const word = getWord(possibleWords[randomInteger]); 
   
    console.log(randomInteger, word);
});





