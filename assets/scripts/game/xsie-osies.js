'use strict'
const Player = require('./Player')
const board = require('../game/board')

const winners = [] // array to hold winning combinations
const SIZE = 3
const playerTokenX = 'X'
const playerTokenY = 'O'
let currentPlayer = 0
let move = 0

const player1 = new Player.Player('player1', 0)
const player2 = new Player.Player('player2', 1)

const drawBoard = function() {
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
                // col.id = counter
            col.setAttribute('data-index', counter)
            col.innerHTML = '#'

            col.addEventListener('click', handler)
            counter++
            drawRow.appendChild(col)
        }

        Parent.appendChild(drawRow)
    }
    loadAnswers()
        // board.createScoreBoard()
}

const handler = function(e) {
    if (currentPlayer === 0) {
        this.innerHTML = playerTokenX
        player1.cellsClicked.push(parseInt(this.dataset.index))
        player1.cellsClicked.sort(function(a, b) { return a - b })
            // update game here move this into a function after working.

        $(`td[data-index=${this.dataset.index}]`).addClass('disabled')

        board.updateBoard(this)
    } else {
        this.innerHTML = playerTokenY
        player2.cellsClicked.push(parseInt(this.dataset.index))
        player2.cellsClicked.sort(function(a, b) { return a - b })
        $(`td[data-index=${this.dataset.index}]`).addClass('disabled')
        board.updateBoard(this)
    }

    move++
    const isWin = checkWinner(player1, player2, currentPlayer)

    if (isWin) {
        if (currentPlayer === 0) {
            player1.points++
                $('#player1').text(player1.points)
            $('#player1').toggleClass('winner')
            $('#player2').removeClass('winner')
        } else {
            player2.points++
                $('#player2').text(player2.points)
            $('#player2').toggleClass('winner')
            $('#player1').removeClass('winner')
        }
        board.reset(player1, player2, currentPlayer)

        drawBoard()
    } else {
        if (currentPlayer === 0) {
            currentPlayer = 1
        } else {
            currentPlayer = 0
        }
    }
}

const checkWinner = function(player1, player2, currentPlayer) {
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

const loadAnswers = function() {
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


module.exports = {
    drawBoard
}