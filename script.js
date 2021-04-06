'use strict';

//selecting element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); // getElementById if used not inclde #
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
// const resetGame = document.querySelector(".btn--new");

// starting condition
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add("hidden");

// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
let currentScore, activePlayer, playing, score

const init = function() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
   
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player-winner");
    player1El.classList.remove("player-winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
}
init();
const switchPlayer = function() {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle("player--active");
        player1El.classList.toggle("player--active");
}

// rlooing dice functinality
btnRoll.addEventListener("click", function() { 
    if(playing  ){
     //1. genrating a random dice roll
     const dice = Math.trunc(Math.random() * 6)+ 1;
     // console.log(dice);
 
     // 2. displaying dice
     diceEl.classList.remove("hidden");
     diceEl.src = `dice-${dice}.png`;
 
     //3.  check for rolled 1: if true, switch to next player
     if(dice !== 1) {
         // Add dice to the current score
         currentScore += dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     } else {
         // switch to next player
         switchPlayer();
     }
    }
}); 

btnHold.addEventListener("click", function() {
    if(playing) {
         // console.log("hold button")
    // 1. add current scroe to active player's score
    score[activePlayer] += currentScore;
    // console.log(score[activePlayer]);
    // score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    //2. check if player's score is>=100
    //finsh the game
    if(score[activePlayer] >= 20) {
        // finsh the game
        playing = false;
        diceEl.classList.add("hidden");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
        // switch to the next player
        switchPlayer();
     } 
    }    
});

// reseting  functinality
btnNew.addEventListener("click", init);


