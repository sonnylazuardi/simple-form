const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    entry: [
        path.join(__dirname, '../index.web.js')
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { presets: ['react', 'es2015', 'stage-0'], cacheDirectory: true, plugins: [
                    "add-module-exports"
                ] },
                include: [path.resolve('./'), __dirname, path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules/react-native-tab-view')]
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: { name: '[name].[hash:16].[ext]' }
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    resolve: {
        alias: {
            'react-native': 'react-native-web'
        }
    }
};