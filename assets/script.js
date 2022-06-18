var quizOn = true; 
var startNumb = 0; 
var correctNumber = 0; 
var score = 0; 
var highScore = 50; 
var answerCheck = 0 
var timeCheck = 1 
var highScoreCheck = document.getElementById('view-high-scores'); 

var startQuiz = document.getElementById('start-quiz'); 
var answerOne = document.getElementById('answer1'); 
var answerTwo = document.getElementById('answer2'); 
var answerThree = document.getElementById('answer3'); 
var answerFour = document.getElementById('answer4'); 
var submitScore = document.getElementById('submitScore'); 

var questionsDisplay = document.getElementById('questions'); 
var mainDiv = document.getElementById('mainDiv'); 
var timeSpan = document.getElementById('timeLeft'); 
var answerOptions = document.getElementById('answerOptions'); 
var displayQuestions = document.createElement("questionDisplay"); 

var finalScore = document.createElement("finalScoreDisplay"); 
var nameInput = document.createElement("enterInitials"); 
var sumbitName = document.createElement("enterInitialsTextArea"); 
var answerButtons = document.createElement("button"); 


var timerCount = 60; 



answerOne.style.display = 'none';
answerTwo.style.display = 'none';
answerThree.style.display = 'none';
answerFour.style.display = 'none';
submitScore.style.display = 'none';
answerOptions.style.display='none';
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

var answersObject = { 
    answers: { 
        0 : {
            0: "<javascript>",
            1: "<js>",
            2: "<script>",
            3: "<src>"},
        1 : {
            0: "Both the head section and the body section are correct",
            1: "The head section",
            2: "The body section",
            3: "None of the above"},
        2 : { 
            0: "Only one",
            1: "Infinitely many",
            2: "Three", 
            3: "None of these"},      
        3 : { 
            0: "Yes",
            1: "No",
            2: "Only when we use 'strict'", 
            3: "None of the above"},      
        4 : { 
            0: "Yes",
            1: "Depends on the type of include",
            2: "None of the above",
            3: "No"},  
    }
};


timeSpan.textContent = timerCount;

highScoreCheck.addEventListener("click", function() { 

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(highScores);

});

submitScore.addEventListener("click", function() { 
    

    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    
   
    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value 
    value = [quizUserDetails,highScore] 


    
    if (!localStorage.length) {
        localStorage.setItem("test","test");
    }
       
        
    for (var i=0; i < localStorage.length; i++){
        
        var checkUser = "";
        var checkUserValue = [];

       
        quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;

        
        checkUser = localStorage.getItem(quizUserDetails);
        
   
        if (checkUser == null) {
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null){
            checkUserValue = checkUser.split(","); 
           
        
        }  



              
        if ( quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {

       
        
        localStorage.setItem(quizUserDetails, value); 
        window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialsTextArea.value + ". Entry will not be added.")
        break; 
        } else if (enterInitialsTextArea.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if ( quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1] ) { 
            
            localStorage.setItem(quizUserDetails, value); 
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break; 

        } else { 
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
                
    }
    
} );


answerOne.addEventListener("mouseover", function() {

    answerOptions.style.display='none';

});

answerTwo.addEventListener("mouseover", function() {

    answerOptions.style.display='none';

});

answerThree.addEventListener("mouseover", function() {

    answerOptions.style.display='none';

});

answerFour.addEventListener("mouseover", function() {

    answerOptions.style.display='none';

});

submitScore.addEventListener("mouseover", function() {

    answerOptions.style.display='none';

});

startQuiz.addEventListener("click", function() {


    startQuiz.style.display = 'none';
    questionDisplay.style.display='none';
    finalScoreDisplay.style.display = 'none';
    enterInitials.style.display='none';
    score = 0; 
    timerCount=60;
    timeSpan.textContent = timerCount; 
    answerCheck = 0; 
    timeCheck = 1; 


    
    
    var timeInterval = setInterval(function() {

        if (score === 1){
            highScore -= 10;
        }

        score = 0; 

        
        if(timerCount >= 1 && answerCheck !== 1) {
            
            questionDisplay.textContent = questionsObject.correct[startNumb];
            
            questionDisplay.style.display= ""; 
            answerOne.style.display = ""; 
            answerTwo.style.display = "";
            answerThree.style.display = "";
            answerFour.style.display = "";

        
            answerOne.textContent = answersObject.answers[correctNumber][0];
            answerTwo.textContent = answersObject.answers[correctNumber][1];
            answerThree.textContent = answersObject.answers[correctNumber][2];
            answerFour.textContent = answersObject.answers[correctNumber][3];
           
            gridContainer.appendChild(displayQuestions);
            gridContainer.appendChild(answerOne);
            gridContainer.appendChild(finalScore);
            timerCount -= 1;
            timeSpan.textContent = timerCount;
            console.log("time left:" + timerCount)
            

            answerOne.addEventListener("click", function() {

                if (questionDisplay.textContent === "Where is the correct place to insert a JavaScript?" && answerOne.textContent === "Both the head section and the body section are correct") {
                    console.log("Correct");
                   
                    startNumb = 2; 
                    correctNumber = 4;
                    answerOptions.style.display="";
                    answerOptions.textContent = "Correct!";
            
                    answerLayout.appendChild(answerOptions);
                } else {

                   

                    switch(answerOne.textContent) {
                        case "<javascript>":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            
                            score = 1; 
                            startNumb = 1; 
                            correctNumber = 1;
                            break;
                        case "Yes":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            
                            score = 1; 
                            startNumb = 3; 
                            correctNumber = 2;
                            break;
                        case "Only one":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            
                            score = 1; 
                            startNumb = 4;
                            correctNumber = 3;
                        break;
                        case "Yes":
                            console.log("Correct");
                            
                            answerOptions.style.display=""; 
                            answerOptions.textContent = "Correct!";
                            
                            answerLayout.appendChild(answerOptions);
                            
                            startNumb = 0; 
                            correctNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answerOne.style.display = 'none';
                            answerTwo.style.display = 'none';
                            answerThree.style.display = 'none';
                            answerFour.style.display = 'none';
                            answerOptions.style.display='none'; 
                            startQuiz.style.display = 'none'; 
                            questionDisplay.textContent = "You have finished the quiz!";
                            finalScoreDisplay.style.display = ""; 
                            enterInitials.style.display = ""; 
                            enterInitialsTextArea.style.display=""; 
                            answerCheck = 1; 
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                            enterInitials.textContent = "Enter initials: "
                            submitScore.style.display = "";
                            submitScore.textContent = "Submit";                   
                            
                            clearInterval(timeInterval);
                            break;
                        
                    }
                }
      

            });

            answerTwo.addEventListener("click", function() {

                if (questionDisplay.textContent === "Is a variable named 'apple' same as 'Apple' in javascript?" && answerTwo.textContent === "No") {
                    console.log("Correct");
                   
                    answerOptions.style.display=""; 
                    answerOptions.textContent = "Correct!";

                    answerLayout.appendChild(answerOptions);
                    
                    startNumb = 0; 
                    correctNumber = 0; 
                    console.log("I'm here" + timeInterval);
                    answerOne.style.display = 'none';
                    answerTwo.style.display = 'none';
                    answerThree.style.display = 'none';
                    answerFour.style.display = 'none';
                    answerOptions.style.display='none'; 
                    startQuiz.style.display = 'none'; 
                    
                    questionDisplay.textContent = "You have finished the quiz!";
                    finalScoreDisplay.style.display = ""; 
                    enterInitials.style.display = ""; 
                    enterInitialsTextArea.style.display="";  
                    finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                    enterInitials.textContent = "Enter initials: "
                    submitScore.style.display = "";
                    submitScore.textContent = "Submit";                   
                    
                    clearInterval(timeInterval);
                } else {

                    switch(answerTwo.textContent) {
                        case "<js>":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                          
                            score = 1; 
                            startNumb = 1;
                            correctNumber = 1;
                            break;
                        case "The head section":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                         
                            score = 1; 
                            startNumb = 2; 
                            correctNumber = 4;
                            console.log(score);
                            break;
                        case "Depends on the type of include":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 3; 
                            correctNumber = 2;
                            break;
                        case "Infinitely many":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 4; 
                            correctNumber = 3;
                            break;

                            
                    }
                 }



                
            });

            answerThree.addEventListener("click", function() {

                if (questionDisplay.textContent === "Inside which HTML element do we put the JavaScript?" && answerThree.textContent === "<script>") {
                    console.log("Correct");
                   
                    startNumb = 1; 
                    correctNumber = 1;
                    answerOptions.style.display=""; 
                    answerOptions.textContent = "Correct!";
                    
                    answerLayout.appendChild(answerOptions);
                } else if (questionDisplay.textContent === "How many ways are there with which we can declare a variable in javascript?" && answerThree.textContent === "Three") {
                    console.log("Correct");
                    
                    startNumb = 4; 
                    correctNumber =3;
                    answerOptions.style.display=""; 
                    answerOptions.textContent = "Correct!";
                    
                    answerLayout.appendChild(answerOptions);
                } else if (questionDisplay.textContent === "Where is the correct place to insert a JavaScript?" && answerThree.textContent === "The body section") {
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 2; 
                            correctNumber = 4;
                }
                
                else {

                    switch(answerThree.textContent) {
                        case "None of the above":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 3;
                            correctNumber = 2;
                            break;
                        case "Only when we use 'strict'":
                            console.log("Inside the case now");
                            score = 1; 
                            startNumb = 0; 
                            correctNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answerOne.style.display = 'none';
                            answerTwo.style.display = 'none';
                            answerThree.style.display = 'none';
                            answerFour.style.display = 'none';
                            answerOptions.style.display='none'; 
                            startQuiz.style.display = 'none'; 
                            
                            questionDisplay.textContent = "You have finished the quiz!";
                            finalScoreDisplay.style.display = ""; 
                            enterInitials.style.display = ""; 
                            enterInitialsTextArea.style.display="";  
                            answerCheck = 1; 
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                            enterInitials.textContent = "Enter initials: "
                            submitScore.style.display = "";
                            submitScore.textContent = "Submit";                   
                            
                            clearInterval(timeInterval);
                            
                        break;
                    }

                }

            });

            answerFour.addEventListener("click", function() {

                if (questionDisplay.textContent === "Is it necessary for the external script file to contain a <script> tag?" && answerFour.textContent === "No") {
                    console.log("Correct");
                   
                    startNumb = 3; 
                    correctNumber = 2;
                    answerOptions.style.display=""; 
                    answerOptions.textContent = "Correct!"
                    answerLayout.appendChild(answerOptions);

                } else {

                    switch(answerFour.textContent) {
                        case "<src>":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 1; 
                            correctNumber = 1;
                            break;
                        case "None of the above":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 2; 
                            correctNumber = 4;
                            break;
                        case "None of these":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 4; 
                            correctNumber = 3;
                        break;
                        case "None of the above":
                            console.log("Inside the case now");
                            answerOptions.style.display="";
                            answerOptions.textContent = "Wrong!";
                            
                            score = 1; 
                            startNumb = 0; 
                            correctNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answerOne.style.display = 'none';
                            answerTwo.style.display = 'none';
                            answerThree.style.display = 'none';
                            answerFour.style.display = 'none';
                            answerOptions.style.display='none'; 
                            startQuiz.style.display = 'none'; 
                            
                            questionDisplay.textContent = "You have finished the quiz!";
                            finalScoreDisplay.style.display = ""; 
                            enterInitials.style.display = ""; 
                            enterInitialsTextArea.style.display="";  
                            answerCheck = 1; 
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore; 
                            enterInitials.textContent = "Enter initials: "
                            submitScore.style.display = "";
                            submitScore.textContent = "Submit";                   
                            
                            clearInterval(timeInterval);
                        break;
                        
                    }
                 
                }
                
            });

        }
        else if(timerCount === 0){

          console.log("I'm here" + timeInterval);
          startNumb = 0; 
          correctNumber = 0; 
          answerOne.style.display = 'none';
          answerTwo.style.display = 'none';
          answerThree.style.display = 'none';
          answerFour.style.display = 'none';
          answerOptions.style.display='none'; 
          
          questionDisplay.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
          startQuiz.style.display = "";
          clearInterval(timeInterval);
          
          
    
          
        }
      }, 1000)

});

function lastQuestionWrong () {
        if (answerCheck === 1 && timeCheck === 1) {
        highScore -= 10;
        timeCheck = 2;
        return highScore
    }

  }