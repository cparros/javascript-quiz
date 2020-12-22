
//create variable for body to add correct and incorrect text
var body = document.body

//Create Scores
var correctScore = 0;
var incorrectScore = 0;

//Question Containers
var question1 = document.querySelector('#cont1')
var question2 = document.querySelector('#cont2')
var question3 = document.querySelector('#cont3')
var question4 = document.querySelector('#cont4')
var question5 = document.querySelector('#cont5')

var questionSet = [question1, question2, question3, question4, question5]

//Create Start button
var startBtn = document.getElementById("start");

//create correct answer
var correct = document.getElementsByClassName('correct')
console.log(correct)

for(var i = 0; i< correct.length; i++) {
  correct[i].addEventListener('click', function(e) {
    e.preventDefault()
  
    var correctDiv = document.createElement('div')
    var text = document.createTextNode('Correct!')
    correctDiv.appendChild(text)
    console.log(correctDiv)
  
    correctDiv.setAttribute("class", "correctNotif")
    
    body.append(correctDiv)
  
    setTimeout(function() {
      question1.style.display = 'none'
      question2.style.display = 'block'
      correctDiv.style.display = 'none'
    }, 2000);
  
    correctScore++
    console.log(correctScore)
  
  })
}

var incorrect = document.getElementsByClassName('incorrect')

console.log(incorrect)

  for(var i = 0; i < incorrect.length; i++) {
    incorrect[i].addEventListener('click', function(e) {
      e.preventDefault()
    
      var incorrectDiv = document.createElement('div')
      var incorrectText = document.createTextNode('Incorrect!')
      incorrectDiv.appendChild(incorrectText)
      console.log(incorrectDiv)
      incorrectDiv.setAttribute('class', 'incorrectNotif')
      body.append(incorrectDiv)
    
      setTimeout(function() {
        question1.style.display = 'none'
        question2.style.display = 'block'
        incorrectDiv.style.display = 'none'
      }, 3500);
    
      incorrectScore++
      console.log(incorrectScore)
    })
  }

// create start button click function to display the First question
startBtn.addEventListener('click', function(e) {
  e.preventDefault()
  console.log('clicked')
  var start = document.querySelector('#intro')
  console.log(start)

  start.style.display = 'none'
  question1.style.display = 'block'
})

console.log(correct.innerText)
