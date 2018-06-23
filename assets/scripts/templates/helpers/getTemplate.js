const Handlebars = require('handlebars')
// const mainTemplate = $('#main-template').html()
// const gameTemplate = $('game-template').html()
// const adminTemplate = $('#admin-template').html()
const templates = {
  mainTemplate: $('#main-template').html(),
  gameTemplate: $('game-template').html(),
  adminTemplate: $('#admin-template').html()
}

function getTemplate () {
  let template
  let context
  console.log(templates.mainTemplate)
  console.log(templates.gameTemplate)
  switch (templates) {
    case templates.mainTemplate:
      template = templates.mainTemplate
      console.log(`template at mainTemplate = ${template}`)
      context = {
        'greeting': 'Would you like to Play a Game?'
      }
      break
    case templates.gameTemplate:
      template = templates.gameTemplate
      console.log(`template at gameTemplate = ${template}`)
      context = {}
      break
    default:
      template = templates.adminTemplate
      console.log(`template at adminTemplate = ${template}`)
      context = {}
      break
  }

  // Compile the template
  const templateToCompile = Handlebars.compile(template)

  // Pass our data to the template
  const templateHTML = templateToCompile(templateToCompile)

  // Add the compiled html to the page
  $('#main-content').html(templateHTML)
}

module.exports = {
  getTemplate
}
