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
        .catch(() => console.log('Login needed.')) // output login required
}

// const onUpdateGame = function(event) {
//     event.preventDefault()
//     debugger
//     gameApi.updateGame(gameData)
//         .then()
//         .catch()
// }

const onGetGame = function() {
    gameApi.showGame()
        .then(() => console.log(gameStore))
        .catch(() => console.log('Could not find game.'))
}

module.exports = {
    onCreateGame,
    onGetGame
}