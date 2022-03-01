var countDownTimer;
var timerInterval;
var arrayOfQuestions = [];
var corrAnswers = [];
var gameScore = 0;
const maxTime = 5 * 60;
const timePenalty = 30; //time is seconds

function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer:", countDownTimer);
}

//when the person clicks begin the timer starts
//start time
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}
function updateTimer() {
    console.log('updateTime: begun');
    countDownTimer = countDownTimer - 1;
    console.log('updateTimer: countDownTimer', countDownTimer);
    presentTimer();
    //alert("Time has expired");
    //window.location.href("save.html");
}


function presentTimer() {
    let currentTime = document.getElementById('timer');
    currentTime.innerText = countDownTimer;
    console.log('presentTimer: currentTime', currentTime);
}

function showScoreBoard () {
    let scoreBoard = document.getElementById('score-board');
    console.log("showScoreBoard: scoreBoard", scoreBoard);
    //scoreBoard.classList.toggle('hide', false);
    scoreBoard.classList.remove('hide');
}

function hideGreeting() {
    let greeting = document.getElementById('greeting');
    console.log("hideGreeting: greeting", greeting);
    //scoreBoard.classList.toggle('hide', false);
    greeting.classList.add('hide');
}

function presentScore() {
    let currentScore = document.getElementById("score");
    currentScore.innerText = gameScore;
    console.log("presentScore: currentScore", currentScore);
}


//question is asked
function SetupQuestionsAndAnswers () {
    console.log("SetupQuestionsAndAnswers", SetupQuestionsAndAnswers);
    let question1 = {
        id: "quest0",
        question: "What does CSS stand for?",
        answer1: "Computer Style Sheets",
        answer2: "Creative Style Sheets",
        answer3: "Cascading Style Sheets",
        answer4: "Colorful Style Sheets",
        correctAnswer1: 3
    };
    let question2 = {
        id: "quest1",
        question: "Where in the HTML document is the correct place to refer an external style sheet?",
        answer1: "End of document",
        answer2: "In the Body section",
        answer3: "In the Head section",
        answer4: null,
        correctAnswer2: 3
    };
    let question3 = {
        id: "quest2",
        question: "Which HTML tag is used to define an internal style sheet?",
        answer1: "css",
        answer2: "style",
        answer3: "script",
        answer4: null,
        correctAnswer3: "style"
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
    /*arrayOfQuestions.push(question3);
    arrayOfQuestions.push(question4);
    arrayOfQuestions.push(question5);*/

    /*corrAnswers.push(correctAnswer1);
    corrAnswers.push(correctAnswer2);
    corrAnswers.push(correctAnswer3);
    corrAnswers.push(correctAnswer4);
    corrAnswers.push(correctAnswer5);*/
    
console.log("SetupQuestions arrayOfQuestions: "), arrayOfQuestions
console.log("SetupAnswers corrAnswers: "), corrAnswers
}

function getQuestion(questionId) {
    console.log("getQuestion questionID", questionId);

    let found = false;

    for(let i = 0; i<arrayOfQuestions.length; i++) {  
        if(questionId == arrayOfQuestions[i].id)  {
            prepareQuestionAndAnswers(i);
        }
    }
}
//shows function on screen
function prepareQuestionAndAnswers(questionindex) {
    console.log("prepareQuestionAndAnswers questionindex", questionindex)
let questionSection = document.getElementById("questions");
let newQuestion = document.createElement("div");
newQuestion.id = arrayOfQuestions[questionindex].id;
newQuestion.innerText = arrayOfQuestions[questionindex].question;
newQuestion.classList.add('question');

let qSpan = document.createElement('span');
qSpan.innerText = arrayOfQuestions[questionindex].question;
newQuestion.appendChild(qSpan);

if(arrayOfQuestions[questionindex].answer1) {
    let answer = document.createElement('div');
    let rdoBtn = document.createElement('input');
    let label= document.createElement('label');

    rdoBtn.id = '${arrayOfQuestions[questionindex].id}_answer1';
    rdoBtn.setAttribute('type', 'radio');
    rdoBtn.value = 1
    rdoBtn.classList.add('answer');
    rdoBtn.classList.add(`$arrayOfQuestions[questionindex].id`);
    rdoBtn.name = arrayOfQuestions[questionindex].id;

    label.innerText = arrayOfQuestions[questionindex].answer1;
    label.setAttribute('for', `${rdoBtn.id}`)

    answer.innerText = arrayOfQuestions[questionindex].answer1;
    answer.classList.add('answer');
    answer.id = `${arrayOfQuestions[questionindex].id}_answer1`;
    questionSection.appendChild(answer);

    console.log("prepareQuestionAndAnswers answer", answer);
}
if(arrayOfQuestions[questionindex].answer2) {
    let answer = document.createElement('div');
    answer.innerText = arrayOfQuestions[questionindex].answer2;
    answer.classList.add('answer');
    answer.id = '${arrayOfQuestions[questionindex].id}_answer2';
    questionSection.appendChild(answer);
}

questionSection.appendChild(newQuestion);
}
//funtion Answers () {
   // let corrAnswers = 
//}

//if question is correct; next question and add points
//if question is incorrect; time penalty and go to the next question

function doGame() {
    setCountDownTimer();
    startTimer();
    hideGreeting();
    SetupQuestionsAndAnswers();
    showScoreBoard();
    presentScore();
    getQuestion('quest0');
}