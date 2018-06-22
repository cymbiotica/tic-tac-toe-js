'use strict'
const getFormFields = require('../../../lib/get-form-fields') // supplied module from GA
const api = require('./authApi')                                  // our user api
const ui = require('./authUi')                                    // user UI updates
const store = require('../utility/userStore')                             // store object for our logged in uer(s) TODO: add seconday for player 2

// sign up for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onSignup = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
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
  console.log(store.user)
  debugger
}

// change password for a single user
// @param event is the click event from the submit button
// @param this = the form data
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
debugger
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
