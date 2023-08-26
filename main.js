const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const lowhigh = document.querySelector('.lowhigh');
const startover = document.querySelector('.result');

/* Create an array to store the numbers entered by the user */
let prevGuess = [];
let numGuess = 1;

submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

/* To check whether the number entered is valid */
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid message!');
    } else if (guess < 1) {
        alert('Please enter a number more than 1!');
    } else if (guess > 100) {
        alert('Please enter a number less than 100!');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

/* To check whether the number is equal, high, or low */
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You have guessed right! Congratulations `);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high `);
    }
}

/* Update the previous guess and remaining guess */
function displayGuess(guess) {
    userInput.value = ''; // To clean the value
    guessSlot.innerHTML +=  ` ${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

/* To display the message */
function displayMessage(message) {
    lowhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';  //To clean the value 
    userInput.setAttribute('disabled', 'disabled'); //To disable the user to enter any value

    //Button to start a new game
    const newGameButton= document.createElement('button');
    newGameButton.textContent='New Game';
    newGameButton.style.backgroundColor= '#916DB3';
    newGameButton.style.borderBlockColor='black';
    newGameButton.style.height='1cm';
    newGameButton.style.color='white';

    newGameButton.addEventListener('click', newGame);


    startover.appendChild(newGameButton);
}

function newGame(){
    //Reset the variable and game

    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML=10;
    guessSlot.innerHTML='';
    lowhigh.innerHTML='';

    userInput.removeAttribute('disabled'); //To allow user to enter values

    // Remove the "New Game" button
    const newGameButton = document.querySelector('button');
    if (newGameButton) {
        newGameButton.remove();
    }


    // Generate a new random number for the new game
    randomNumber = parseInt(Math.random() * 100 + 1);

}




