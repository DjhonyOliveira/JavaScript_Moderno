const path = require('path') // função do node para pegar o diretorio local

module.exports = {
  entry: {
    index: './src/index.js', // nome e diretorio do arquivo a ser otimizado
    hello: './src/hello.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'), // diretorio de criação da pasta com os codigos otimizados
    filename: '[name].min.js' // nome dos cosigos otimizados
  },
  mode: 'development' // varia entre development (desenvolvimento) e production (produção)
}