const Handlebars = require('handlebars')
const templates = require('../precompiled/templates.js')
const allTtemplates = {
  mainTemplate: Handlebars.templates['mainCard'],
  gameTemplate: Handlebars.templates['gameCard'],
  adminTemplate: Handlebars.templates['adminCard']
}

function getTemplate() {
  let template
  let context
  console.log(allTtemplates.mainTemplate)
  
  switch (allTtemplates) {
    case allTtemplates.mainTemplate:
      template = allTtemplates.mainTemplate
      console.log(`template at mainTemplate = ${template}`)
      context = {
        'greeting': 'Would you like to Play a Game?'
      }
      break
    case allTtemplates.gameTemplate:
      template = allTtemplates.gameTemplate
      console.log(`template at gameTemplate = ${template}`)
      context = {}
      break
    default:
      template = allTtemplates.adminTemplate
      console.log(`template at adminTemplate = ${template}`)
      context = {}
      break
  }

  // Compile the template
  // const templateToCompile = Handlebars.compile(template)

  // Pass our data to the template
  // const templateHTML = templateToCompile(templateToCompile)

  // Add the compiled html to the page
  $('#main-content').html(template)
}

module.exports = {
  getTemplate
}
