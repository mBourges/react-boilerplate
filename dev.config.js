var webpack = require('webpack');

var path = require('path');  
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    devtool: 'source-map', 
    entry: [
        path.resolve(ROOT_PATH, 'src/index'),
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        host: process.env.IP,
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("style.css"),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            title: 'Issue Management'
        })
    ]
};