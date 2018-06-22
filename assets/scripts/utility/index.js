'use strict'
const changeContents = require('./changeContent')
$(() => {
  $('#main').on('click', changeContents.getTemplateAjax('../templates/mainCard.handlebars'))
  $('#game').on('click', changeContents.getTemplateAjax('../templates/gameCard.handlebars'))
})
