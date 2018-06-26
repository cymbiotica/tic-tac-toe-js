'use strict'
const Player = require('./Player')

const SIZE = 3
const winners = [] // array to hold winning combinations
let currentPlayer = 0

const player1 = new Player.Player('player1', 0)
const player2 = new Player.Player('player2', 1)

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

const drawBoard = function () {
  let move = 0
  // drawing our board
  const Parent = document.getElementById('game-board')

  // iterator
  let counter = 1

  // clearboard
  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild)
  }

  // draw our board to the page
  for (let column = 0; column < SIZE; column++) {
    const drawRow = document.createElement('tr')

    for (let row = 0; row < SIZE; row++) {
      const col = document.createElement('td')
      col.id = counter
      col.innerHTML = '#'

      const handler = function (e) {
        if (currentPlayer === 0) {
          this.innerHTML = 'X'
          player1.cellsClicked.push(parseInt(this.id))
          // console.log(`Player 1 cells = ${player1.cellsClicked.length}`)
          player1.cellsClicked.sort(function (a, b) { return a - b })
        } else {
          this.innerHTML = 'O'
          player2.cellsClicked.push(parseInt(this.id))
          // console.log(`Player 2 cells = ${player2.cellsClicked.length}`)
          player2.cellsClicked.sort(function (a, b) { return a - b })
        }

        move++
        const isWin = checkWinner()

        if (isWin) {
          if (currentPlayer === 0) {
            player1.points++
          } else {
            player2.points++
          }
          $('#playerOne').html(player1.points)
          $('#playerTwo').html(player2.points)

          reset()
          drawBoard()
        } else {
          if (currentPlayer === 0) {
            currentPlayer = 1
          } else {
            currentPlayer = 0
          }
        }
      }

      col.addEventListener('click', handler)
      counter++
      drawRow.appendChild(col)
    }

    Parent.appendChild(drawRow)
  }

  loadAnswers()
}

function checkWinner () {
  // win condition
  let isWin = false

  // all placeholder for each players cellsClicked
  let playerSelections = []

  // if player is O set their cells for player1 else set for player2
  currentPlayer === 0 ? playerSelections = player1.cellsClicked : playerSelections = player2.cellsClicked
  if (playerSelections.length >= SIZE) {
    for (let winningSet = 0; winningSet < winners.length; winningSet++) {
      const sets = winners[winningSet] // winning hand
      let setFound = true

      for (let r = 0; r < sets.length; r++) {
        let found = false

        // players cellsClicked
        for (let s = 0; s < playerSelections.length; s++) {
          if (sets[r] === playerSelections[s]) {
            found = true
            break
          }
        }

        // value not found in players cellsClicked
        // not a valid set, move on
        if (found === false) {
          setFound = false
          break
        }
      }

      if (setFound === true) {
        isWin = true
        break
      }
    }
  }

  return isWin
}

function reset () {
  currentPlayer = 0
  player1.cellsClicked = []
  player2.cellsClicked = []
}

module.exports = {
  drawBoard
}
