'use strict'
const events = require('../scripts/auth/authEvents')
// content loading events
const changeView = require('../scripts/templates/helpers/getTemplate')

$(() => {
  
  // auth events+
  $('#sign-up').on('submit', events.onSignup)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('sumbit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('#game').on('click', changeView.getTemplate())
  changeView.getTemplate()
})

// $('#main-content').ready(changeView.getTemplate())
