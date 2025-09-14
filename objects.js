var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 2004,
    calcAge : function () {
        this.age = 2025 - this.birthYear;
    }
};

john.calcAge();
console.log("----------Here our object is:", john);
// console.log("----------Age of John is:", john.calcAge);

john.calcAge = () => {
    console.log(this);
}


john.calcAge();

console.log("Thiis is age of John: ", john.age);