const webpack = require('webpack');
const Path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const ifProd = (plugin) => addPlugin(env.prod, plugin);
  const removeEmptyPlugin = (array) => array.filter(p => !!p);

  return {
    entry: {
      app: './index.js',
      vendor: ['babel-polyfill', 'immutable', 'classnames', 'history', 'reselect', 'whatwg-fetch'],
      react: ['react', 'react-dom', 'react-router'],
      redux: ['redux', 'react-redux', 'react-router-redux', 'redux-immutable', 'redux-saga']
    },
    output: {
      filename: 'bundle.[name].js',
      path: Path.resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: Path.resolve(__dirname, 'app'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style!css' },
      ],
    },
    plugins: removeEmptyPlugin([
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })),
      ifProd(new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })),
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      })),
      new htmlWebpackPlugin({
        template: './index.html'
      })
    ])
  };
};
