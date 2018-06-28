const game = require('./xsie-osies')
let gameStore = require('../utility/gameStore')

const onSigninSuccessCreateGame = function (data) {
  gameStore = data
  // console.log('signincreategame')
  console.log(gameStore)
  game.drawBoard()
}

module.exports = {
  onSigninSuccessCreateGame
}
