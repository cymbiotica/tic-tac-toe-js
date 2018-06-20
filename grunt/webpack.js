'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  options: {
    entry: {
      application: './index.js',
      specs: './spec/_all.js',
      vendor: ['jquery', 'bootstrap-sass']
    },

    output: {
      filename: '[name].js',
      path: path.join(__dirname, '/../public'),
      publicPath: 'public/'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, './node_modules')
                ]
              }
            }
          ]
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg|png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(hbs|handlebars)$/,
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              path.join(__dirname, '/../assets/scripts/templates/helpers')
            ]
          }
        }
      ]
    },

    resolve: {
      alias: {
<<<<<<< 44988aa290b0564942480e0394352f6bc26f43a2
        handlebars: 'handlebars/dist/handlebars.min.js'
=======
        handlebars: 'handlebars/dist/handlebars.js'
>>>>>>> Initial commit: clean broswer template
      }
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true
    }
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false
  }
}
