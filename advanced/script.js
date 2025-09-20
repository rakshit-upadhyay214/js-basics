/*
Prototype: property that every function constructor has.
every single object has access to the properties of "Object" object

Example of prototype chaining: When we declare an array, it doesn’t directly contain all the built-in methods like push, map, or filter. 
Instead, the array inherits these methods from Array.prototype. And since Array.prototype itself inherits from Object.prototype, this forms the prototype chain.

Question-> Why put methods on the prototype at all?
Answer-> Efficiency ✅
--  If you put a method inside the constructor → every new object gets a new copy of that function (bad for memory).
--  If you put it on the prototype → all objects share one copy, but can still access it through the prototype chain.
That’s why constructors usually only define instance-specific data (name, yearOfBirth, etc.), while methods are usually placed on the prototype.
*/


// Creating objects in JavaScript-
// 1. Function Constructor
var Person = function (name, yearOfBirth, job) { // Function constructor always starts with capital letter.
    this.name = name;
    this.yearOfBirth =  yearOfBirth;
    this.job =  job;
    this.retirementYear = function() {
        console.log("This will retire in: ", 2025 + (60 - (2025-this.yearOfBirth)));
    }
}

var john = new Person("John", 2004, "Teacher"); // new keyword, first creates an empty object, then the function is called.

Person.prototype.calculateAge = function (){
    console.log(2025-this.yearOfBirth);
};

john.calculateAge();
john.retirementYear();

// 2. Object.create() method - 
var personProto = {
    calculateAge : function() {
        console.log(2025- this.yearOfBirth);
    }
};

john = Object.create(personProto);


jane = Object.create(personProto, {
    name: {value: "Jane"},
    yearOfBirth : {value: 2003},
    job : {value: "Designer"}
});

// The object defined using create method inherits from the Object (proto) directly passed in argument.
// In case of functional constructors objects get inherited from the prototype object of the functional constructor.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// Primitives v/s Objects
// objects are passed by reference and primitives just create a new copy and store.

var a = 1;
var b = 2;
a = 5;
console.log("----a: ", a);
console.log("---b: ", b);

var obj1 = {
    name : "Jonas",
    city : "Indore"
};

var obj2 = {
    name : "Jasmine",
    city : "Patiala"
}

obj1 = obj2; //reference of obj2 is passed into obj1.
console.log("---obj1", obj1.name);
console.log("---obj2", obj2.name);

/* OUTPUT
>> a:  5
>> b:  2
>> obj1 Jasmine
>> obj2 Jasmine
 */