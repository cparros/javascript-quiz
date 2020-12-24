// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
console.log(questions)
// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreen = document.getElementById("start-screen");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  startScreen.style.display = 'none'
  // un-hide questions section
  questionsEl.style.display = 'block'
  // start timer
  var timer = setInterval(function() {
    time--
  }, 1000);
  // show starting time
  timerEl.innerText = time

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];
  

  questionChoices.textContent = questions[0].choices
 
  // update title with current question 
  questionTitle.textContent = questions[currentQuestionIndex].title
  // clear out any old question choices
  if(questionChoices !== '') {
    questionChoices.textContent = ''
  }
  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    
    // attach click event listener to each choice

    // display on the page
  });
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page

    // play "wrong" sound effect

    feedbackEl.textContent = "Wrong!";
  } else {
    // play "right" sound effect

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage

    // redirect to next page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.addEventListener("click", saveHighscore);

// user clicks button to start quiz
startBtn.addEventListener("click", startQuiz);

initialsEl.addEventListener("onkeyup", checkForEnter);