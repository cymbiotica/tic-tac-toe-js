const gameApi = require('../game/gameApi')
const gameStore = require('../utility/gameStore')

const onUpdateGame = function(gameObj) {
    gameApi.updateGame(gameObj)
        .then(function(data) {
            // check for cell clicked


            // if (data.game.cells.includes('X')) {
            //     $(`td[data-index=${data.game.cells.includes('X')}]`).css('background-color', 'green')
            // }
            // $(`td[data-index=${data.game.cells.indexOf('O')}]`).css('background-color', 'green')

        })
        .catch()
}

module.exports = {
    onUpdateGame
}