const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        surfers: './src/surfers/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            Surfers: path.resolve(__dirname, 'src/surfers/')
        }
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader', 'sass-loader']
                }),
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};