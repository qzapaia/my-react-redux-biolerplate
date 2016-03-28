var merge = require('webpack-merge');
var baseConfig = require('./webpack.config');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge.smart(baseConfig, {
    module: {
        loaders:[{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style","css!postcss!less")
        },
        {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': '"production"'
          }
        })
    ],
    postcss: [ 
        autoprefixer({ browsers: ['last 2 versions'] }), 
        cssnano() 
    ]
});