'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index')
require('./assets/scripts/auth/index')
require('./assets/scripts/game/index')

require('./assets/scripts/game/xsie-osies')
require('./assets/scripts/templates/precompiled/templates')

require('handlebars')

// styles
require('./assets/styles/index.scss')
