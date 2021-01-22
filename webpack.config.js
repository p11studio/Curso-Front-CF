
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, '..'),
        hot: true
    },
    plugins: [],
    module: {}

}