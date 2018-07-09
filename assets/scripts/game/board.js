const updateEvent = require('../game/updateBoard')
const gameEvents = require('../game/updateGame/gameUpdate')

const updateBoard = function(cellClicked) {
    const updateGameObj = {
        'game': {
            'cell': {
                'index': cellClicked.dataset.index,
                'value': cellClicked.innerHTML
            },
            'over': false
        }
    }
    const cellIndex = cellClicked.dataset.index
    updateEvent.onUpdateGame(updateGameObj, cellIndex) // need to json stringify?
}

const createScoreBoard = function() {
    // create scoreboard

    const gameBoard = document.getElementById('game-board')
    const scoreBoard = document.createElement('section')
    const player1ScoreHeading = document.createElement('p')
    const player2ScoreHeading = document.createElement('p')
    const playerOneScoreValue = document.createElement('div')
    const playerTwoScoreValue = document.createElement('div')

    player1ScoreHeading.innerHTML = 'Player One'
    scoreBoard.appendChild(player1ScoreHeading)

    playerOneScoreValue.classList.add('playerOne')
    scoreBoard.appendChild(playerOneScoreValue)

    player2ScoreHeading.innerHTML = 'Player Two'
    scoreBoard.appendChild(player2ScoreHeading)

    playerTwoScoreValue.classList.add('playerTwo')
    scoreBoard.appendChild(playerTwoScoreValue)

    gameBoard.appendChild(scoreBoard)
}

const reset = function(player1, player2, currentPlayer) {
    currentPlayer = 0
    player1.cellsClicked = []
    player2.cellsClicked = []
    debugger
    gameEvents.onCreatNeweGame()
}

module.exports = {
    updateBoard,
    createScoreBoard,
    reset
}