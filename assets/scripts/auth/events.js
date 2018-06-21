'use strict'
const getFormFields = require('../../../lib/get-form-fields') // supplied module from GA
const api = require('./api')                                  // our user api
const ui = require('./ui')                                    // user UI updates
const store = require('../store')                             // store object for our logged in uer(s) TODO: add seconday for player 2

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignup = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  // store our user in a object available to the app
  store.user = data.user
}

// change password for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// sign out for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignup,
  onSignIn,
  onChangePassword,
  onSignOut
}
