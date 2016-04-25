var path = require("path");
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: [
        "./index.js"
    ],
    output: {
        path: path.resolve(__dirname + "/public/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders:[{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style","css!postcss!less")
        },
        {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', 
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
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ],
    postcss: [ 
        autoprefixer({ browsers: ['last 2 versions'] }), 
        cssnano() 
    ]
};