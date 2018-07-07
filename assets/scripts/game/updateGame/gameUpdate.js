const gameApi = require('../../game/gameApi')
const gameStore = require('../../utility/gameStore')
const game = require('../../game/xsie-osies')

const onCreatNeweGame = function() {
    // event.preventDefault()
    gameApi.createGame()
        .then(function(data) {
            gameStore.game = data.game
            $('#newGame').toggleClass('hidden')
            game.drawBoard()
        })
        .catch(function() {
            $('#message').innerText('Could not locate game.')
        })
}
module.exports = {
    onCreatNeweGame
}