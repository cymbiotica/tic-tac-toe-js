const game = require('./xsie-osies')
const store = require('../utility/userStore')
let gameStore = require('../utility/gameStore')

const onSigninSuccessCreateGame = function (data) {
  gameStore = data
  console.log(gameStore)
  game.drawBoard()
}

module.exports = {
  onSigninSuccessCreateGame
}
