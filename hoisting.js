// Hoisting:
// 1. Using functions before even they are declared is called as function hoisting.
// 2. Same goes with variable, we can use variables even they are declared later, but can't do this if not initialized



birthYear = 2004; // variable is initialized here
console.log("-------------", birthYear); 
retirement(birthYear);

function retirement(birthYear) {
    elem = document.getElementById("answer");
    elem.innerHTML = (2025 - birthYear)>=65 ? "Yes" : "NO";
}

var birthYear; // variable birthYear is declared here


