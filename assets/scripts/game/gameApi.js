'use strict'
const config = require('../utility/config')
const userStore = require('../utility/userStore')
const gameStore = require('../utility/gameStore')

const indexGames = function() {
    // let gameOver
    // typeof isGameOver === 'undefined' ? gameOver = '' : gameOver = isGameOver
    return $.ajax({
        url: `${config.apiUrl}/games/`,
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + userStore.user.token
        }
    })
}

const createGame = function() {
    return $.ajax({
        url: `${config.apiUrl}/games/`,
        method: 'POST',
        headers: {
            Authorization: 'Token token=' + userStore.user.token
        },
        data: {}
    })
}
const showGame = function(sz) {
    debugger
    return $.ajax({
        url: `${config.apiUrl}/games/${gameStore.oldGame.id}`,
        method: 'GET',
        headers: {
            Authorization: 'Token token=' + userStore.user.token
        }
    })
}

const updateGame = function(jsonObj) {
    return $.ajax({
        url: `${config.apiUrl}/games/${gameStore.game.id}`,
        method: 'PATCH',
        headers: {
            Authorization: 'Token token=' + userStore.user.token
        },
        data: jsonObj
    })
}

module.exports = {
    indexGames,
    createGame,
    showGame,
    updateGame
}
G