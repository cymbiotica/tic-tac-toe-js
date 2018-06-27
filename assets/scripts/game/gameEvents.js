const gameApi = require('./gameApi')
const game = require('./xsie-osies')
let gameStore = require('../utility/gameStore')

const onCreateGame = function (user) {
  gameApi.createGame(user)
    // .then(gameUI.onSigninSuccessCreateGame)
    .then(function (data) {
      gameStore = data
      console.log(gameStore)
      game.drawBoard()
    })
    .catch(() => console.log('Login needed.')) // output login required
}

const onUpdateGame = function (jsonObj) {
  gameApi.updateGame(jsonObj)
    .then(() => alert('update game success'))
    .catch(() => console.log('update game fail'))
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
