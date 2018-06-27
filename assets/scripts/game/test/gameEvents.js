const gameApi = require('../gameApi')
const game = require('../xsie-osies')
const gameStore = require('../../utility/gameStore')

// console.log('sd')

// const onCreateGame = function (user) {
//   gameApi.createGame(user)
//     // .then(gameUI.onSigninSuccessCreateGame)
//     .then(function (data) {
//       gameStore = data
//       game.drawBoard()
//     })
//     .catch(() => console.log('Login needed.')) // output login required
// }

const onUpdateGame = function (jsonObj) {
  // console.log('gameStore in onUpdate')
  // console.log(gameStore)
  gameApi.updateGame(jsonObj)
    .then(() => alert('update game success'))
    .catch(() => console.log('update game fail'))
}

module.exports = {
  onUpdateGame
}
