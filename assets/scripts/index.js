'use strict'
const events = require('../scripts/auth/authEvents')
const changeContents = require('../scripts/utility/changeContent')
$(() => {
  $('#sign-up').on('submit', events.onSignup)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('sumbit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  // $('#main').on('click', changeContents.getTemplateAjax('../assets/scripts/templates/mainCard.handlebars'))
  // $('#game').on('click', changeContents.getTemplateAjax('../assets/scripts/templates/gameCard.handlebars'))
})
