// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

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
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");


// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  startScreen.style.display = 'none'
  // un-hide questions section
  questionsEl.style.display = 'block'
  // start timer
  setInterval(function() {
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
    var btn = document.createElement('button');
    var qText = document.createTextNode(choice)
    btn.appendChild(qText)
    // attach click event listener to each choice
    btn.addEventListener('click', function() {
      questionClick(btn)
    }) 
    // display on the page
    choicesEl.appendChild(btn)
  });
}

 function questionClick(target) {
  // check if user guessed wrong
  if (target.innerText !== questions[currentQuestionIndex].answer) {
    console.log(target.innerText)
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.innerText = time
    // play "wrong" sound effect
    sfxWrong.play()
    
    feedbackEl.textContent = "Wrong!";
  } else if (target.innerText === questions[currentQuestionIndex].answer) {
    // play "right" sound effect
    console.log(target.innerText)
    sfxRight.play()
    // timerEl.innerText = time

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
    currentQuestionIndex++
  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(time)
 
  // show end screen
  endScreen.style.display = 'block'
  questionsEl.style.display = 'none'
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
  var initials = initialsEl.value
  
      var newScore = {
        score: time,
        initials: initials
      };

      // save to localstorage

     localStorage.setItem("newscores", JSON.stringify(newScore))
      
      // redirect to next page
      window.location.href = "highscores.html";
    
}

function checkForEnter() {
  // "13" represents the enter key
    if(e.key === '13') {
    console.log('pressed')
    }
}

// user clicks button to submit initials
submitBtn.addEventListener("click", saveHighscore);

// user clicks button to start quiz
startBtn.addEventListener("click", startQuiz);

initials.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   submitBtn.click();
  }
});

