'use strict'
const gameEvents = require('../game/gameEvents.js')

$(() => {
    $('#newGame').on('click', gameEvents.onCreateGame)
})