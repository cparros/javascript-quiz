var correctScore = 0;
var incorrectScore = 0;

var correct = document.getElementById('correct')
console.log(correct.innerText)

var wrong1 = document.getElementById('incorrect1')
var wrong2 = document.getElementById('incorrect2')
var wrong3 = document.getElementById('incorrect3')

console.log(wrong1.innerText)
console.log(wrong2.innerText)
console.log(wrong3.innerText)

var incorrectAnswers = [wrong1, wrong2, wrong3]



correct.addEventListener('click' , function(e) {
  e.preventDefault()

  var correctDiv = document.createElement('div')
  var text = document.createTextNode('Correct!')
  correctDiv.appendChild(text)
  console.log(correctDiv)
  correctDiv.setAttribute("id", "correctNotif")
  var body = document.body
  body.append(correctDiv)

  var navigate = this.getAttribute('href')
  setTimeout(function () {
    window.location = navigate
  }, 2000)

  correctScore++
})









