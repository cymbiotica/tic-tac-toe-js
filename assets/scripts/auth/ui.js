'use strict'
const store = require('../store')

// const onSuccess = function (callingMethod) {
//   $('#message').text(`${callingMethod} has run successfully.`)
//   $('#message').css('background-color', 'green')
//   console.log(`${callingMethod} data returned = ${data}`)
// }

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully.')
  $('#message').css('background-color', 'green')
  console.log('onSignUpSuccess ran, Data returned is: ' + data)
}

const onSignUpFailure = function (error) {
  $('#message').text('Signed up failed.')
  $('#message').css('background-color', 'red')
  console.log('onSignUpFailure ran, Error returned is: ' + error)
}

const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])
  // console.log('onSignInSuccess ran, Data returned is: ' + data)

  store.user = data.user
}

const onSignInFailure = function (error) {
  $('#message').text('Signed in failed.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])
  console.log('onSignInFailure ran, Error returned is: ' + error)
}

const onChangePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])
  console.log('onChangePasswordSuccess ran, Data returned is: ' + data)

  // store.user = data.user
}

const onChangePasswordFailure = function (error) {
  $('#message').text('Password change failed.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])
  console.log('onChangePasswordFailure ran, Error returned is: ' + error)
}

const onSignOutSuccess = function (data) {
  $('#message').text('Signed out successfully.')
  $('#message').css('background-color', 'green')
}

const onSignOutFailure = function () {
  $('#message').text('Signed out failed.')
  $('#message').css('background-color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
