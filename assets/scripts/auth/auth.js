'use strict'
const events = require('../auth/authEvents')

$(() => {
    $('#sign-up').on('submit', events.onSignup)
    $('#sign-in').on('submit', events.onSignIn)
    $('#change-password').on('submit', events.onChangePassword)
    $('#sign-out').on('submit', events.onSignOut)
})