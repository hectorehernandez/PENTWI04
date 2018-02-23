const path = require('path');

module.exports = {
    entry: './app/app.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/
        }]
    },
    devServer: {
        port: 9293,
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true
    }
}