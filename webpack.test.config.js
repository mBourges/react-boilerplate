const Path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    entry: './app/index.js',
    output: {
      filename: 'bundle.js',
      path: Path.resolve(__dirname, 'app'),
      pathinfo: !env.prod,
    },
    context: Path.resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
        {test: /\.css$/, loader: 'style!css'},
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ]
  };
};
