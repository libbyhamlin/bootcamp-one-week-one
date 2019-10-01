// IMPORT MODULES under test here:
import { isCorrect } from '../about-me/functions.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('Test that function returns true if user inputs yes', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const userAnswer = 'yes';
  //Act
  // Call the function you're testing and set the result to a const
    const userAnswerIsCorrect = isCorrect(userAnswer);
  //Assert
  // Make assertions about what is expected valid result
    assert.equal(userAnswerIsCorrect, true);
});
test('Test that function returns true if user inputs no', function(assert) {
    const userAnswerTwo = 'no';

    const userAnswerIsIncorrect = isCorrect(userAnswerTwo);

    assert.equal(userAnswerIsIncorrect, false);
});
