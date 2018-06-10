const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
    entry: './app/app.js',
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tag.pug$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                {
                    loader: 'riot-tag-loader',
                    options: {
                        template: 'pug',
                        debug: true
                    }
                }
                ]
            },
            {
                test: /\.js|\.tag.pug$/,
                enforce: 'post',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: `es2015-riot`
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.tag.pug']
    },
    plugins: [
        new webpack.ProvidePlugin({ riot: 'riot' })
    ],
    mode: 'development'
}]