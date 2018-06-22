const Handlebars = require('handlebars')

const getTemplateAjax = function (path) {
  let source
  let template
  $.ajax({
    url: path,
    cache: true,
    success: function () {
      source = path.slice((path.lastIndexOf('/') + 1), path.length)
      template = Handlebars.compile(source)
      $('main-content').html(template)
    }
  })
//  .then(drawHTML)
}

module.exports = {
  getTemplateAjax
}
// $(document).ready(function () {
//   $('li>a[id$="Container"]').click(function (event) {
//     event.preventDefault()
//     const href = $(this).attr('href')
//     alert('Loading ' + href)
//     $('#container').load(href)
//     return false
//   })
// })

// const source = $('mainCard').html()
// const template = Handlebars.compile(source)
// $('main-content').html(template())
