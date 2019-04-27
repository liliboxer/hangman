import getRandomInteger from '../src/get-random-integer.js';
import getWord from '../src/get-word.js';
import generateLettersOfWord from '../src/generate-letters-of-word.js';
import divsBasedOnWord from '../src/divs-based-on-word.js';

const test = QUnit.test;

test('get random whole number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expectedList = [1, 2, 3, 4, 5, 6, 7];
    const booleanResult = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = expectedList.includes(getRandomInteger(3));

    //Assert
    assert.equal(result, booleanResult);

});

/////

test('get word', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expectedList = ['hello', 'world', 'max', 'cat'];
    const expectedWord = 'max';


    //Act 
    // Call the function you're testing and set the result to a const
    const result = getWord(expectedList[2]);
   
    

    //Assert
    assert.equal(result, expectedWord);

});

/////

test('generate letters of word', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const word = 'max';
    const expected = 'm';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = generateLettersOfWord(word);
   
    //Assert
    assert.equal(result, expected);

    //// setting const expected to an array output? 
});

test('diplay # of divs based on # of letters in word', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const word = 'max';
    const parentElement = document.createElement('section');
    const expected = '<<section>div></div><div></div><div></div></section>';



    //Act 
    // Call the function you're testing and set the result to a const
    divsBasedOnWord(parentElement, word);
   
    //Assert
    assert.equal(parentElement.parentInnerHTML, expected);

});

