// 'use strict'
const store = require('../utility/userStore')
const gameEvents = require('./temp')

const onSignUpSuccess = function (data) {
  $('#message').text('Signed up successfully.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])
}

const onSignUpFailure = function (error) {
  $('#message').text('Signed up failed.')
  $('#message').css('background-color', 'red')
  console.log('onSignUpFailure ran, Error returned is: ')
  console.log(error)
}

const onSignInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])

  store.user = data.user
  gameEvents.onCreateGame()
}

const onSignInFailure = function (error) {
  $('#message').text('Signed in failed.')
  $('#message').css(['background-color', 'red'], ['color', 'white'])
  console.log('onSignInFailure ran, Error returned is: ')
  console.log(error)

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
  $('#message').css(['background-color', 'red'], ['color', 'white'])
}

const onSignOutFailure = function () {
  $('#message').text('Signed out failed.')
  $('#message').css('background-color', 'red')
}

module.exports = {
  // onSuccess
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
// const onSuccess = function (data) {
//   $('#message').text(`${onSuccess.caller} has run successfully.`)
//   
//   $('#message').css('background-color', 'green')
//   console.log(`${onSuccess.caller} data returned = ${data}`)
// }

// const onFailure = function (error, callingMethod) {
//   $('#message').text(`${callingMethod} failed.`)
//   $('#message').css(['background-color', 'red'], ['color', 'white'])
//   console.log(`${callingMethod} ran, Error returned is: ' + ${error}`)
// }
