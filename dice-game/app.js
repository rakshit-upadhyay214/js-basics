var activePlayer, scores, dice, roundScore, gamePlaying;
newGame();

// --------------------------------------------
// Adding eventListner
// -------------------------------------------

//  This btn function will be refered as a callback function because it is  called by another function.
function btn(){

}

document.querySelector('.dice').style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click',btn);
// addEventListner method takes two arguments, 1. event type and 2.the function to be called
// Here function name is written directly as we want eventListner to call it, no need to write btn()



// Anonymous function: A function that doesn't have a name and can't be reused
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // on click what we want:-
        // 1. Random number generation
        dice = Math.floor(Math.random()*6)+1; //Using built in Math object
        console.log("Dice: ", dice);

        // 2. Display this number on screen
        img = document.querySelector('.dice');
        img.style.display = 'block'
        img.src = 'images/dice-' + dice + '.jpg';

        // 3. Update the round score IF the rolled number is NOT a 1.
        if (dice !== 1) { 
            // Here !== is used instead of != to prevent type coercion
            // Type coercion is refer to the implicit conversion of values from one data type to another during operations, comparisons, or assignments
            roundScore += dice;
            document.querySelector('#current-score-'+activePlayer).textContent = roundScore;
        } else {
            scores[activePlayer] += roundScore;
            changePlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLobal score
        scores[activePlayer] += roundScore;

        // Check if the player won the game & change the player
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-'+activePlayer).textContent = "WINNER!"
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            changePlayer();
        }    
    }
});


function changePlayer() {
    document.querySelector('#current-score-'+activePlayer).textContent = 0;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    roundScore = 0;
    gamePlaying = true;
    activePlayer = activePlayer===1 ? 0 : 1;

    // document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    // document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    // We have seen add & remove functions, now here comes toggle() which checks if element already has the specified class it removes it or otherwise add it.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}



document.querySelector('.btn-new').addEventListener('click', newGame);


function newGame() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-score-0').textContent = 0;
    document.getElementById('current-score-1').textContent = 0;
    document.getElementById('name-1').textContent = "PLAYER-2"
    document.getElementById('name-0').textContent = "PLAYER-1"
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}