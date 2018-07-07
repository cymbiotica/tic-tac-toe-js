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
            $('#message').innerHTML('Login is required to create a new game.')
        }) // output login required
}

const onGetGame = function() {
    gameApi.showGame()
        .then(function(data) {
            const parent = document.getElementById('old-games')
            const displayGame = document.createElement('div')
            while (parent.hasChildNodes()) {
                parent.removeChild(parent.firstChild)
            }
            displayGame.innerHTML = data.game.cells

            parent.appendChild(displayGame)

        })
        .catch(function() {
            $('#message').innerHTML('Login is required to get old games.')
        })
}
const onGetGames = function() {
    gameApi.indexGames()
        .then(function(data) {
            const parent = document.getElementById('old-games')
            while (parent.hasChildNodes()) {
                parent.removeChild(parent.firstChild)
            }
            for (let i = 220; i < 250; i++) {
                const displayGame = document.createElement('div')
                displayGame.innerHTML = data.games[i].cells

                parent.appendChild(displayGame)
            }
        })
        .catch(function() {
            $('#message').innerHTML('Login is required to get old games.')
        })
}

module.exports = {
    onCreateGame,
    onGetGame,
    onGetGames
}