const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant page',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
};