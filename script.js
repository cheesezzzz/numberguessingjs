'use strict';


// document.querySelector('.message').textContent =
// '🎉 Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent =
        // '🚫 Please input a number!'
        displayMessage('🚫 Please input a number!');

        
    // when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
        

    // when guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Number is too high' : '📉 Number is too low')
            score-- 
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('🫡 you lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
})



document.querySelector('.again').addEventListener('click', () => {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
})