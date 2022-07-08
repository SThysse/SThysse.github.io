'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct number🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let checkBtn = function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too Low' : 'Too High');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
};
document.querySelector('.check').addEventListener('click', checkBtn);
document.querySelector('.guess').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkBtn();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
});

document.querySelector('.hard').addEventListener('click', function () {
  score = 25;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.guess').value = '';
  document.querySelector('.between').textContent = '(Between 1 and 50)';
});
