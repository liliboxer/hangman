import getRandomInteger from './get-random-integer.js';
import getWord from './get-word.js';
import possibleWords from './possible-words.js';

// adding events
const guessButton = document.getElementById('guess-button');

// subscribing
guessButton.addEventListener('click', () => {
    const randomInteger = getRandomInteger(9);
    const word = getWord(possibleWords[randomInteger]); 

    console.log(word);
});





