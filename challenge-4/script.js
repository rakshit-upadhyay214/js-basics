var score = 0;
var QuestionBuilder= function (question, answer, options) {
    this.question = question;
    this.answer = answer;
    this.options = options;
}
var que1 = new QuestionBuilder("What is the capital of India?", 1, ["New Delhi", "Mumbai", "Chennai", "Kolkata"]);
var que2 = new QuestionBuilder("What is the capital of USA?", 1, ["Washington DC", "New York", "Los Angeles", "Chicago"]);
var que3 = new QuestionBuilder("What is the capital of UK?", 3, ["Manchester", "Birmingham", "London", "Liverpool"]);
var que4 = new QuestionBuilder("What is the capital of Australia?", 3, ["Sydney", "Melbourne", "Canberra", "Brisbane"]);

var questions = [que1, que2, que3, que4];
displayQuestion();
function displayQuestion() {
    var quesNum = Math.floor(Math.random() * questions.length);
    console.log("Q. ", questions[quesNum].question);
    var i=0;
    while (i<questions[quesNum].options.length) {
        console.log(i+1 + ". " + questions[quesNum].options[i]);
        i++;
    }
    var userAns = prompt("Please select the correct answer");
    if (userAns == questions[quesNum].answer) {
        console.log("Correct answer!");
        score = score + 2;
        console.log("Your current score is: ", score);
        displayQuestion();
    } else if (userAns === 'exit') {
        console.log("Game Over!");
        console.log("Your final score is: ", score);
    } else {
        console.log("Wrong answer! Try again :)");
    }

}