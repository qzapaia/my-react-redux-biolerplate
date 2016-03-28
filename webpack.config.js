var path = require("path");
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    // devtool:'source-map',
    entry: [
        "./index.js"
    ],
    output: {
        path: path.resolve(__dirname + "/public/dist"),
        // este determina donde sirve el dev server el bundle
        publicPath: "/dist/",

        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015','react-hmre']
                // this preset is required for react hot reload
            }
        },
        { 
            test: /\.css$/, 
            loader: "style!css" 
        },
        {
            test: /\.less$/,
            loaders:['style','css','less']
        }]
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': '"development"'
          }
      })
    ],
    devServer: {
        historyApiFallback: true
    }
}