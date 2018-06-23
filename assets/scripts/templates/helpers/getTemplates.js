const templates = {}
const Handlebars = require('handlebars')

function displayTemplate(tmpl, data) {

  if (templates[tmpl] === undefined) {
    jQuery.get('/try/examples/js/handlebars_template_' + tmpl + '.htm', function (resp) {
      templates[tmpl] = Handlebars.compile(resp)
      displayTemplate(tmpl, data)
    })
    return
  }

  const template = templates[tmpl]
  const html = template(data)
  $('#msg').html(html)
}

$(document).ready(function () {
  $('#show').click(function () {
    const name = 'show'
    const data = {
      time: new Date()
    }
    displayTemplate(name, data)
  })
})
