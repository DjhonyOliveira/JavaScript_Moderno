module.exports = {
    entry: {
      index: './src/index.js'
    },
    mode: 'development',
    module: { // modulos 
      rules: [{ // loader instalados via NPM
        test: /\.css$/, // espressão regular para pegar os codigos que terminam com .css
        use: ['style-loader', 'css-loader'] // loader que foram instalados para esta função
      }]
    }
  }