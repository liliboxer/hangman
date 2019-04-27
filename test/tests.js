import getRandomInteger from '../src/get-random-integer.js';

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