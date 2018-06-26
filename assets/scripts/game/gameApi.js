'use strict'
const config = require('../utility/config')
const gameStore = require('../utility/gameStore')

// The index action is a GET that retrieves all the games associated with a user.
// The response body will contain JSON containing an array of games
// If the over query parameter is specified the results will be restricted accordingly.
// If there are no games associated with the user, the response body will contain an empty games array
const indexGames = function (isGameOver) {
  let gameOver
  typeof isGameOver === 'undefined' ? gameOver = '' : gameOver = isGameOver
  return $.ajax({
    url: `${config.apiUrl}/games/${gameOver}`,
    // config.apiUrl + '/games' + '/' + gameOver,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + gameStore.user.token
    }
  })
}

const createGame = function () {

}

module.exports = {
  indexGames,
  createGame
}
