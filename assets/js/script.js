// Global variables that target the elements needed for DOM traversal
 var timeEl = document.getElementById("time");
 var startContainer = document.getElementById('start');
 var startButton = document.getElementById('start-button');
 var questionsContainer = document.getElementById('questions');
 var titleEl = document.getElementById('title');
 var buttonsEl = document.getElementById('buttons');
 var initialsContainer = document.getElementById('initials');
 var initalInputEl = document.getElementById('initial-input');
 var submitButton = document.getElementById('submit');
 var timerInterval;
 var secondsLeft = 60;
 var choice1 = document.getElementById("button1");
 var choice2 = document.getElementById("button2");
 var choice3 = document.getElementById("button3");
 var choice4 = document.getElementById("button4");
 var questionIndex = 0;

questionsContainer.style.display = "none";
initialsContainer.style.display = "none";

// Array of objects to store questions, answers and choices
var questions = [
  {
    question: "1. What does HTML stand for",
    choices: ["1. Hello Thanks Michelle Love", "2. Hyper Text Markup Language", "3. High Top Moose Limo", "4. Hippo Top Mountain Lion"],
    answer: "2. Hyper Text Markup Language"
  },
  {
    question: "2. What is considered to be the most popular programming language in the world?",
    choices: ["1. HTML","2. CSS","3. JavaScript","4. JQuery "],
    answer: "3. JavaScript"
  },
  {
    question: "3. What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
    choices: ["1. Clone","2. Debugger","3. Repeater","4. Loop"],
    answer: "4. Loop"
  },
  {
    question: "4. In JavaScript, what element is used to store and manipulate text, usually in multiples?",
    choices: ["1. Arrays","2. Strings","3. Recorders","4. Variables"],
    answer: "2. Strings"
  },
{
    question: "5. In JavaScript, what element is used to store multiple values in a single variable?",
    choices: ["1. Strings","2. Variables","3. Functions","4. Arrays"],
    answer: "4. Arrays"
}
]

// Timer function
function timer(){
    timeEl.textContent = secondsLeft 
     timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 's'

        if(secondsLeft === 0) {
          // Use `clearInterval()` to stop the timer
          clearInterval(timerInterval);  
        }
      }, 1000);

}

// Start quiz
var startQuiz = function(){
  timer();
  startContainer.style.display = "none";
  questionsContainer.style.display = "block";
  nextQuestion();
}

// Moves to next question
var nextQuestion = function(){
  titleEl.textContent = questions[questionIndex].question;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {

  if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
  // Correct answer, add 1 score to final score
      secondsLeft += 10;
      timeEl.textContent = secondsLeft;
  } else {
  // Wrong answer, deduct 10 second from timer
      secondsLeft -= 10;
      timeEl.textContent = secondsLeft;
  }

  questionIndex++;
  // Repeat with the rest of questions 
  if (questionIndex < questions.length) {
      nextQuestion();
  } else {
  // If no more question, run game over function
      gameOver();
  }
}

var chose1 = function(){
  checkAnswer(0);
}
var chose2 = function(){
  checkAnswer(1);
}
var chose3 = function(){
  checkAnswer(2);
}
var chose4 = function(){
  checkAnswer(3);
}

// Game over function
function gameOver() {
  initialsContainer.style.display = "block";
  questionsContainer.style.display = "none";
  startContainer.style.display = "none";
  timeEl.style.display = "none";

// Shows final score
  finalScore.textContent = secondsLeft;
}

// Event listener for the button click
startButton.addEventListener('click', startQuiz)
choice1.addEventListener("click", chose1);
choice2.addEventListener("click", chose2);
choice3.addEventListener("click", chose3);
choice4.addEventListener("click", chose4);
