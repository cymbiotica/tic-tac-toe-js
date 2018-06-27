const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('./gameApi')
const game = require('./xsie-osies')
const gameUI = require('./gameUI')

const onCreateGame = function (user) {
  gameApi.createGame(user)
    // .then(data => console.log('Data:', data))
    // .then(gameUI.onSigninSuccessCreateGame) // drawBoard()
    .then(game.drawBoard())
    .catch(() => console.log('Login needed.')) // output login required
}

module.exports = {
  onCreateGame
}
