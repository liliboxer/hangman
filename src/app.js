import getRandomInteger from './get-random-integer.js';
import getWord from './get-word.js';
import possibleWords from './possible-words.js';
import generateLettersOfWords from './generate-letters-of-word.js';

// adding events
const playButton = document.getElementById('play-button');

// subscribing
playButton.addEventListener('click', () => {
    const randomInteger = getRandomInteger(9);
    const word = generateLettersOfWords(getWord(possibleWords[randomInteger]));
    console.log(randomInteger, word);
    
    
});





