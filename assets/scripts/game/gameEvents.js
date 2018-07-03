'use strict'

const gameAPi = require('../game/gameApi')

const onUpdateGame = function (event) {
  event.preventDefault()
  gameAPi.updateGame(gameData)
    .then()
    .catch()
}