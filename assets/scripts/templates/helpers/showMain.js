const Handlebars = require('handlebars')

$(function () {
  // Grab the template script
  const mainTemplate = $('#main-template').html()

  // Compile the template
  const mainTemplatePreCompile = Handlebars.compile(mainTemplate)

  // Define our data object
  const context = {
    'greeting': 'Would you like to play a game?'
  }

  // Pass our data to the template
  const mainTemplateHTML = mainTemplatePreCompile(context)

  // Add the compiled html to the page
  $('#main-content').html(mainTemplateHTML)
})
