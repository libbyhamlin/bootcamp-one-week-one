import { isCorrect } from './function.js';
const myButton = document.getElementById('action-button');

export const isCorrect = (username) => {
    if (userInput === 'yes') {
        return true;
} else {
    return false;
  }
};


myButton.onclick = () => {
    alert('welcome to my quiz!');
    const myConfirmation = confirm('do you even want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer = prompt('is my fav color pink?');
    const LowercaseUserAnswer = userAnswer.toLowerCase();
    const trimmedLowerCaseUserAnswer = LowercaseUserAnswer.trim();

    isCorrect(trimmedLowerCaseUserAnswer)