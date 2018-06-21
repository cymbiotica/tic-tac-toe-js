'use strict'
const events = require('../scripts/auth/events')

$(() => {
  $('#sign-up').on('submit', events.onSignup)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('sumbit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
})
