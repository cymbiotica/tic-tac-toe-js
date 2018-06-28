const gameApi = require('../gameApi')
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
  console.log(gameStore.game)
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
