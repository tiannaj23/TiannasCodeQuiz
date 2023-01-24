// create global variables that target the elements we will need for DOM traversal
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
 var secondsLeft = 100;

// create an array of objects to store your questions, answers and choices


// create a start function
// GIVEN I am taking a code quiz
// WHEN I click the start button
function start(){
    timeEl.textContent = secondsLeft 
     timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft 

        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
         
        }
    
      }, 1000);
    // THEN a timer starts and I am presented with a question
    // WHEN I answer a question
    // THEN I am presented with another question
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // WHEN the game is over
    // THEN I can save my initials and score

}



// create an event listener for the button click

startButton.addEventListener('click', start)