const gameApi = require('../game/gameApi')
const gameUI = require('../game/gameUI')

const onCreateGame = function (user) {
  gameApi.createGame(user)
    .then(gameUI.onSigninSuccessCreateGame)
    .catch(() => console.log('Login needed.')) // output login required
}

module.exports = {
  onCreateGame
}
