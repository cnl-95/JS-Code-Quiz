const quizStatus = true; 
const questionNumber = 0; 
const answerNumber = 0; 
const score = 0; 
const highScore = 50; 
const finalAnswerCheck = 0 
const checkTimes = 1 
const viewHighScoresBtnEl = document.getElementById('view-high-scores'); 
const startQuizBtnEl = document.getElementById('start-quiz'); 


const answer1BtnEl = document.getElementById('answer1'); 
const answer2BtnEl = document.getElementById('answer2'); 
const answer3BtnEl = document.getElementById('answer3'); 
const answer4BtnEl = document.getElementById('answer4'); 
const submitScoreEl = document.getElementById('submitScore'); 


const questionsEl = document.getElementById('questions'); 

const mainDivEl = document.getElementById('mainDiv'); 
const htmlTimeLeft = document.getElementById('timeLeft'); 
const answerCorrectWrong = document.getElementById('answerCorrectWrong'); 
const questionDisplayEl = document.createElement("questionDisplay"); 
const finalScoreDisplayEl = document.createElement("finalScoreDisplay"); 

const enterInitialsEl = document.createElement("enterInitials"); 
const enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea"); 

const button1234 = document.createElement("button"); 

const timeLeft = 60; 

answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display='none';
enterInitialsTextArea.style.display='none';

const questionsObject = { 
    correct: { 
        0 : "Inside which HTML element do we put the JavaScript?",
        1 : "Where is the correct place to insert a JavaScript?",
        2 : "Is it necessary for the external script file to contain a <script> tag?", 
        3 : "How many ways are there with which we can declare a constiable in javascript?", 
        4 : "Is a constiable named 'apple' same as 'Apple' in javascript?"
    }
};