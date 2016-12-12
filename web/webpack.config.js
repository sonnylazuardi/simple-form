const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: path.join(__dirname, '../index.web.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: { presets: ['react', 'es2015', 'stage-0'] },
                exclude: [path.resolve('../node_modules'), path.resolve(__dirname, '../node_modules')],
                include: [path.resolve('./'), __dirname, path.resolve(__dirname, '../src')]
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: { name: '[name].[hash:16].[ext]' }
            }
        ]
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