// IMPORT CODE FROM OTHER MODULES
import { isCorrect } from './functions.js';

// REFERENCE NEEDED DOM ELEMENTS
const myButton = document.getElementById('action-button');

// INITIALIZE APPLICATION STATE (variables)

// ADD EVENT HANDLERS
// button.addEventListener('click', () => {});

// ADDITIONAL FUNCTIONS TO HELP DO WORK
myButton.onclick = () => {
    alert('welcome to my quiz!');
    const myConfirmation = confirm('do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('is my favorite color bluish? (yes/no)');
    const lowercaseUserAnswer = userAnswer.toLowerCase();
    const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

    const userIsCorrect = isCorrect(trimmedLowercaseUserAnswer);

    if (userIsCorrect) {
        alert('yeys!');
    } else {
        alert('booo');
    }

    const userAnswertwo = prompt('is my favorite teddy bear pink? (yes/no)');
    const lowercaseUserAnswerTwo = userAnswertwo.toLowerCase();
    const trimmedLowercaseUserAnswertwo = lowercaseUserAnswerTwo.trim();

    const userIsCorrectTwo = isCorrect(trimmedLowercaseUserAnswertwo);

    if (userIsCorrectTwo) {
        alert('yeys!');
    } else {
        alert('booo');
    }

    const userAnswerThree = prompt('Do I wear glasses? (yes/no)');
    const lowercaseUserAnswerThree = userAnswerThree.toLowerCase();
    const trimmedLowercaseUserAnswerThree = lowercaseUserAnswerThree.trim();

    const userIsCorrectThree = isCorrect(trimmedLowercaseUserAnswerThree);

    if (userIsCorrectThree) {
        alert('yeys!');
    } else {
        alert('booo');
    }
};
