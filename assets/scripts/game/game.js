'use strict'
const gameEvents = require('../game/gameEvents.js')

$(() => {
    $('#newGame').on('click', gameEvents.onCreateGame)
    $('#last-game').on('click', gameEvents.onGetGame)
})