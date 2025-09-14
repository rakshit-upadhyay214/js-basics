var activePlayer, scores, dice, roundScore;

score = [0,0];
roundScore = 0;
activePlayer = 0;


// document.querySelector("#current-" + activePlayer).textContent = dice;
var x = document.querySelector('#score-0').textContent;
console.log(x);


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
    // on click what we want:-
    // 1. Random number generation
    dice = Math.floor(Math.random()*6)+1; //Using built in Math object
    console.log("Dice: ", dice);
    img = document.querySelector('.dice');
    img.style.display = 'block'
    img.src = "dice-" + dice + ".jpg";
});

