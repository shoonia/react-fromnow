const path = require('path');

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  mode: 'production',
  entry: './src/index.js',

  externals: {
    react: reactExternal,
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'es5'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactTreeTemplate',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  optimization: {
    minimize: true
  }
};