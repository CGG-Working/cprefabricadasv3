let path = require('path');
const webpack = require('webpack');
// webpack.config.js
module.exports = {  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./public/jsx/class_view/index.js'],
    index: ['./public/jsx/index1.jsx'],
    index2: ['./public/jsx/index2.jsx'],
    house: ['./public/jsx/class_view/house.js']
  },
  output: {
    path: __dirname+'/bundles',
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  },
  node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
  }
}