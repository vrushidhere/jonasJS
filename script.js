'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let message = document.querySelector('.message').textContent;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.number').textContent = secretNumber;

checkBtn.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  function newMessage(message) {
    document.querySelector('.message').textContent = message;
  }

  function guessUpdate(guess) {
    if (guess > secretNumber) {
      newMessage('Too High!');
      document.querySelector('.score').textContent = --score;
    } else if (guess < secretNumber) {
      newMessage('Too Low!');
      document.querySelector('.score').textContent = --score;
    } else if (guess === secretNumber) {
      newMessage('Correct Answer');
      highscore < score ? (highscore = score) : highscore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  if (!guess) {
    newMessage('You Must Guess...');
  } else {
    guessUpdate(guess);
  }
});

againBtn.addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
