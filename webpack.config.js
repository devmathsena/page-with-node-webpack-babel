const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }, {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    }
}