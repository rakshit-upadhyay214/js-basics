var a = 'Hello'; 


function first() {
    var b = 'Hi!';
    second();
    console.log(a+b+(c ? c : "Slim Shady"));

    function second(){
        var c = 'Heyyyyy!';
        console.log(a+b+c);
    }
}

// ---------------------------------------------------------------------------------------------------------

function calculateAge(yearOfBirth) {
    console.log(2025 - yearOfBirth);
    console.log(this); // this points to the window's object as it is global object
}

var john =  {
    name : "John Smith",
    birthYear : 1975,
    calcAge : function() {
        // Here this varible points to the john object, as it is a method call
        console.log("this points to => ",this);
        console.log("calcAge => ",2025-this.birthYear);

        // Here this varible will be pointing to the Window object, as it is a regular function call
        // function innerfunction () {
        //     console.log("--Inside inner function=>", this);
        // }
        // innerfunction();
    }
}
// ----------------------------------------------------------------------------------------------------------------
//  Method borrowing 
// ------------------------------------------------------------------------------------------------------------------

john.calcAge();

var cam = {
    name : 'Cam Cameron',
    birthYear : 1998,
};

cam.calcAge = john.calcAge;

cam.calcAge();

