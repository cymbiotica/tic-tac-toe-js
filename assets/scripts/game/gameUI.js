const game = require('./xsie-osies')
let gameStore = require('../utility/gameStore')

const onSigninSuccessCreateGame = function (data) {
  gameStore = data
  game.drawBoard()
}

module.exports = {
  onSigninSuccessCreateGame
}
