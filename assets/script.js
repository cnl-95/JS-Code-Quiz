var quizStatus = true; 
var questionNumber = 0; 
var answerNumber = 0; 
var score = 0; 
var highScore = 50; 
var finalAnswerCheck = 0 
var checkTimes = 1 
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); 
var startQuizBtnEl = document.getElementById('start-quiz'); 


var answer1BtnEl = document.getElementById('answer1'); 
var answer2BtnEl = document.getElementById('answer2'); 
var answer3BtnEl = document.getElementById('answer3'); 
var answer4BtnEl = document.getElementById('answer4'); 
var submitScoreEl = document.getElementById('submitScore'); 


var questionsEl = document.getElementById('questions'); 

var mainDivEl = document.getElementById('mainDiv'); 
var htmlTimeLeft = document.getElementById('timeLeft'); 
var answerCorrectWrong = document.getElementById('answerCorrectWrong'); 
var questionDisplayEl = document.createElement("questionDisplay"); 
var finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 

var enterInitialsEl = document.createElement("enterInitials"); 
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); 

var button1234 = document.createElement("button"); 

var timeLeft = 60; 

answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

var questionsObject = { 
    correct: { 
        0 : "Inside which HTML element do we put the JavaScript?",
        1 : "Where is the correct place to insert a JavaScript?",
        2 : "Is it necessary for the external script file to contain a <script> tag?", 
        3 : "How many ways are there with which we can declare a variable in javascript?", 
        4 : "Is a variable named 'apple' same as 'Apple' in javascript?"
    }
};