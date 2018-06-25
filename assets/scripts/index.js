'use strict'
const events = require('./auth/authEvents')

require('./auth/index')
require('./game/index')


$(() => {
  $('#sign-up').on('submit', events.onSignup)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('sumbit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
})
