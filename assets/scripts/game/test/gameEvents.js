const gameApi = require('../gameApi')
const gameStore = require('../../utility/gameStore')

const onUpdateGame = function (jsonObj) {
  gameApi.updateGame(jsonObj)
    .then(() => console.log('update game success'))
    .catch(() => console.log('update game fail'))
}

const onGetGame = function () {
  gameApi.showGame()
    .then(() => console.log(gameStore))
    .catch(() => console.log('Could not find game.'))
}

module.exports = {
  onUpdateGame,
  onGetGame
}
