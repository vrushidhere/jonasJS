'use strict';

const rollBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');

let currentScore = 0;
let activePlayer = 0;
let totalScore = 0;

document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  currentScore = 0;
};

rollBtn.addEventListener('click', function () {
  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  let magicNumber = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${magicNumber}.png`;
  let currentScoreTxt = document.getElementById(`current--${activePlayer}`);
  currentScore = Number(currentScoreTxt.textContent);

  if (magicNumber == 1) {
    currentScoreTxt.textContent = 0;
    switchPlayer();
  } else {
    currentScore += magicNumber;
    currentScoreTxt.textContent = currentScore;
  }
});

holdBtn.addEventListener('click', function () {
  totalScore =
    Number(document.getElementById(`score--${activePlayer}`).textContent) +
    Number(document.getElementById(`current--${activePlayer}`).textContent);
  document.getElementById(`score--${activePlayer}`).textContent = totalScore;
  if (totalScore >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    rollBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
    diceEl.classList.add('hidden');
  } else {
    switchPlayer();
  }
});

newGameBtn.addEventListener('click', function () {
  currentScore = 0;
  totalScore = 0;
  activePlayer = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
});
