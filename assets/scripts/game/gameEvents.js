'use strict'

const gameApi = require('../game/gameApi')
const gameStore = require('../utility/gameStore')
const game = require('../game/xsie-osies')

const onCreateGame = function(event) {
    event.preventDefault()
    gameApi.createGame()
        .then(function(data) {
            gameStore.game = data.game
            $('#newGame').toggleClass('hidden')
            game.drawBoard()
        })
        .catch(function() {
            $('sign-in-message').innerHTML('Login is required to create a new game.')
        }) // output login required
}

// const onUpdateGame = function(event) {
//     event.preventDefault()
//     debugger
//     gameApi.updateGame(gameData)
//         .then()
//         .catch()
// }

const onGetGame = function() {
    gameApi.indexGames()
        .then(function(data) {
            const parent = document.getElementById('old-games')
            const displayGame = document.createElement('div')
            for (let i = 220; i < 250; i++) {
                const displayGame = document.createElement('div')
                displayGame.innerHTML = data.games[i].cells

                parent.appendChild(displayGame)
            }
        })
        .catch(function() {
            $('#sign-in-message').innerHTML('Login is required to get old games.')
        })
}

module.exports = {
    onCreateGame,
    onGetGame
}