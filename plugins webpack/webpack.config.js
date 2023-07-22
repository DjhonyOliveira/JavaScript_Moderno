const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // chamada do plugin

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'] // plugin tem um loader especifico dele
    }]
  },
  plugins: [
    new MiniCssExtractPlugin() // função de ativação do plugin
  ]
}