'use strict'
require('./xsie-osies')
require('handlebars')
const loadTemplate = require('../templates/helpers/getTemplate')

$(() => {
  loadTemplate.getTemplate()
})
