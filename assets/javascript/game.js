// Refactored code

// Create crystal object/variable
var crystal = {
  crystal1:
  {
    name: 'Crystal1',
    value: 0
  },
  crystal2:
  {
    name: 'Crystal2',
    value: 0
  },
  crystal3:
  {
    name: 'Crystal3',
    value: 0
  },
  crystal4:
  {
    name: 'Crystal4',
    value: 0
  }
}
// Global variables
var score = 0
var targetScore = 0
var wins = 0
var losses = 0

// Initialize game
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

var startGame = function () {
  // Reset game
  score = 0

  targetScore = getRandom(19, 120)

  crystal.crystal1.value = getRandom(1, 12)
  crystal.crystal2.value = getRandom(1, 12)
  crystal.crystal3.value = getRandom(1, 12)
  crystal.crystal4.value = getRandom(1, 12)

  console.log('Target score: ' + targetScore)
  /* eslint-disable, no-undef */
  $('#score').html(`Your total score is: ${score}`)
  $('#target').html(targetScore)
}

var addValues = function (crystal) {
  score = score + crystal.value

  $('#score').html(score)
  console.log(score)

  winOrloss()
}

var winOrloss = function () {
  if (score > targetScore) {
    alert('Sorry, better luck next time!')
    losses++
    $('#losses').html(losses)

    // restart game
    startGame()
  } else if (score === targetScore) {
    alert('Congrats, you win!')
    wins++
    $('#wins').html(wins)

    // restart game
    startGame()
  }
}

startGame()

// On click functions
$('#crystal1').on('click', function () {
  addValues(crystal.crystal1)
})

$('#crystal2').on('click', function () {
  addValues(crystal.crystal2)
})

$('#crystal3').on('click', function () {
  addValues(crystal.crystal3)
})

$('#crystal4').on('click', function () {
  addValues(crystal.crystal4)
})
/* eslint-enable no-undef */
