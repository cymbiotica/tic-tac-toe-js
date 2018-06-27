'use strict'
const config = require('../utility/config')
const userStore = require('../utility/userStore')
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
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + userStore.user.token
    }
  })
}
// The create action expects a POST with an empty body (e.g '' or '{}' if JSON).
// If the request is successful, the response will have an HTTP Status of 201 Created,
// and the body will contain JSON of the created game with player_x set to the user calling create,
const createGame = function () {
  console.log(userStore)
  return $.ajax({
    url: `${config.apiUrl}/games/`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + userStore.user.token
    },
    data: {}
  })
}
const showGame = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + userStore.user.token
    }
  })
}

const updateGame = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/games/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + userStore.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': 0,   // example data
          'value': 'x'  // example data
        },
        'over': false
      }
    }
  })
}
module.exports = {
  indexGames,
  createGame,
  showGame,
  updateGame
}
