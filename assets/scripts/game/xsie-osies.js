'use trict'
// const config = require('../utility/gameConfig')
const SIZE = 3
const winners = [] // array to hold winning combinations
let playerOneChoices = []
let playerTwoChoices = []
let timer
let numPLayers = 2
let currentPlayer
let move = 0
let points1 = 0
let points2 = 0

function loadAnswers () {
  // arrays of winning combinations - straights and diangles.
  winners.push([1, 2, 3])
  winners.push([4, 5, 6])
  winners.push([7, 8, 9])
  winners.push([1, 4, 7])
  winners.push([2, 5, 8])
  winners.push([3, 6, 9])
  winners.push([1, 5, 9])
  winners.push([3, 5, 7])
}

function drawBoard() {
  const Parent = document.getElementById('game-board')
  let counter = 1

  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild)
  }

  for (let column = 0; column < SIZE; column++) {
    const row = document.createElement('tr')

    for (let row = 0; row < 3; row++) {
      const col = document.createElement('td')
      col.id = counter
      col.innerHTML = counter

      const handler = function (e) {
        if (currentPlayer === 0) {
          this.innerHTML = 'X'
          playerOneChoices.push(parseInt(this.id))
          playerOneChoices.sort(function (a, b) {
            return a - b
          })
        } else {
          this.innerHTML = 'O'
          playerTwoChoices.push(parseInt(this.id))
          playerTwoChoices.sort(function (a, b) {
            return a - b
          })
        }

        move++
        const isWin = checkWinner()

        if (isWin) {
          if (currentPlayer === 0) {
            points1++
          } else {
            points2++
          }
          // document.getElementById("player1").innerHTML = points1
          // document.getElementById("player2").innerHTML = points2

          reset()
          drawBoard()
        } else {
          if (currentPlayer === 0) {
            currentPlayer = 1
          } else {
            currentPlayer = 0
          }
          // this.removeEventListener('click', arguments.callee)
        }
      }

      col.addEventListener('click', handler)

      row.appendChild(col)
      counter++
    }

    Parent.appendChild(row)
  }

  loadAnswers()
}

function checkWinner () {
  // check if current player has a winning hand
  // only stsrt checking when player x has size number of selections
  let win = false
  let playerSelections = []

  if (currentPlayer === 0) {
    playerSelections = playerOneChoices
  } else {
    playerSelections = playerTwoChoices
  }
  if (playerSelections.length >= SIZE) {
    // check if any 'winners' are also in your selections

    for (let i = 0; i < winners.length; i++) {
      let sets = winners[i] // winning hand
      let setFound = true

      for (let r = 0; r < sets.length; r++) {
        // check if number is in current players hand
        // if not, break, not winner
        let found = false

        // players hand
        for (let s = 0; s < playerSelections.length; s++) {
          if (sets[r] === playerSelections[s]) {
            found = true
            break
          }
        }

        // value not found in players hand
        // not a valid set, move on
        if (found === false) {
          setFound = false
          break
        }
      }

      if (setFound === true) {
        win = true
        break
      }
    }
  }

  return win
}

function reset () {
  currentPlayer = 0
  playerOneChoices = []
  playerTwoChoices = []
}
