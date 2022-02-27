var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
var corrAnswers = [];
const maxTime = 3 * 60;

function setCountDownTimer() {
    countDownTimer = maxTime;
}

//when the person clicks begin the timer starts
//start time
let timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    countDownTimer = countDownTimer - 1;
    alert("Time has expired");
    window.location.href("save.html");
}

//question is asked
function SetupQuestions () {
    let question1 = {
        id: "quest0",
        question: "What does CSS stand for?",
        answer1: "Computer Style Sheets",
        answer2: "Creative Style Sheets",
        answer3: "Cascading Style Sheets",
        answer4: "Colorful Style Sheets",
        correctAnswer1: "Cascading Style Sheets"
    };
    let question2 = {
        id: "quest1",
        question: "Where in the HTML document is the correct place to refer an external style sheet?",
        answer1: "End of document",
        answer2: "In the Body section",
        answer3: "In the Head section",
        answer4: null,
        correctAnswer2: "In the Head section"
    };
    let question3 = {
        id: "quest2",
        question: "Which HTML tag is used to define an internal style sheet?",
        answer1: "<css>",
        answer2: "<style>",
        answer3: "<script>",
        answer4: null,
        correctAnswer3: "<style>"
    };
    let question4 = {
        id: "quest3",
        question: "Which HTML attribute is used to define inline styles?",
        answer1: "style",
        answer2: "styles",
        answer3: "class",
        answer4: "font",
        correctAnswer4: "style"
    };
    let question5 = {
        id: "quest4",
        question: "How do you insert a comment in a CSS file?",
        answer1: "/*This is a comment*/",
        answer2: "//This is a comment",
        answer3: "'This is a comment",
        answer4: "//This is a comment//",
        correctAnswer5: "/*This is a comment*/"
    };
    arrayOfQuestions.push(question1);
    arrayOfQuestions.push(question2);
    arrayOfQuestions.push(question3);
    arrayOfQuestions.push(question4);
    arrayOfQuestions.push(question5);

    corrAnswers.push(correctAnswer1);
    corrAnswers.push(correctAnswer2);
    corrAnswers.push(correctAnswer3);
    corrAnswers.push(correctAnswer4);
    corrAnswers.push(correctAnswer5);
    
console.log("SetupQuestions arrayOfQuestions: "), arrayOfQuestions
console.log("SetupAnswers corrAnswers: "), corrAnswers
}

function nextQuestion() {
for(let i = 0; i<arrayOfQuestions.length; i++) {    
}
}
//shows function on screen
function showQuestion(questionindex) {
let questionSection = document.getElementById("question");
let newQuestion = document.createElement("div");
newQuestion.id = arrayOfQuestions[questionindex].id
newQuestion.innerText = arrayOfQuestions[questionindex].question;
questionSection.appendChild()

}
//funtion Answers () {
   // let corrAnswers = 
//}

//if question is correct; next question and add points
//if question is incorrect; time penalty and go to the next question