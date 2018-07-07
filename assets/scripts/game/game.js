'use strict'
const gameEvents = require('../game/gameEvents.js')

$(() => {
    $('#newGame').on('click', gameEvents.onCreateGame)
    $('#some-game').on('click', gameEvents.onGetGames)
    $('#last-game').on('click', gameEvents.onGetGame)
})