# Contador.

La app tiene un contador. Hay 2 acciones posibles, incrementar el contador y
decrementarlo. La app se usa por la consola del browser.

Pasos.

Crear app de node.

     npm init -y

Instalar las dependencias

     npm install webpack html-webpack-plugin extract-text-webpack-plugin redux --save

Voy a usar webpack, así que voy a crear el archivo de la configuracion de webpack

     cat webpack.config.js

~~~ js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin(),
  ]
};

module.exports = config;
~~~

    cat index.js

~~~ js
import { createStore } from 'redux'

// reducer
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// store
const store = createStore(counter)

// esto lo pongo para poder usarlo en la consola del browser.
window.store = store
~~~

ahora cuando corremos webpack dentro de la carpeta dist, hay 2 archivos.
Si se abre index.html en el browser. se puede consultar el store con
store.getState()
para incrementar el state podemos llamar a la funcion
store.dispatch({ type: 'INCREMENT' })
y para decrementar el valor
store.dispatch({ type: 'DECREMENT' })

