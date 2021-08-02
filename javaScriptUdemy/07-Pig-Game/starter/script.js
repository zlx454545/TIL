'use strict';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions

const scores = [];
let activatedPlayer, currentScore, playing;

const init = function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  activatedPlayer = 0;
  currentScore = 0;
  playing = true;

  diceEL.classList.add('hidden');
  player0EL.classList.add('player--active');
  document.getElementById(`current--${activatedPlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activatedPlayer}`)
    .classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activatedPlayer}`).textContent = 0;
  currentScore = 0;
  activatedPlayer = activatedPlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    // 2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    console.log(dice);
    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activatedPlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activatedPlayer] += currentScore;
    document.getElementById(`score--${activatedPlayer}`).textContent =
      scores[activatedPlayer];
    // 2. Check if player's score >= 100
    if (scores[activatedPlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activatedPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activatedPlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
