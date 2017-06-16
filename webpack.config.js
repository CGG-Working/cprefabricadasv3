let path = require('path');
const webpack = require('webpack');
// webpack.config.js
module.exports = {  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./public/jsx/index.jsx'],
    index: ['./public/jsx/index1.jsx']
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