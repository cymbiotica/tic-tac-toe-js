const gameApi = require('../game/gameApi')
const game = require('../game/xsie-osies')
let gameStore = require('../utility/gameStore')
const gameUI = require('../game/gameUI')

// console.log('sd')

const onCreateGame = function (user) {
  gameApi.createGame(user)
    .then(gameUI.onSigninSuccessCreateGame)
    // .then(function (data) {
    //   gameStore = data
    //   game.drawBoard()
    // })
    .catch(() => console.log('Login needed.')) // output login required
}

module.exports = {
  onCreateGame
}
