const path = require('path')
const webpack = require('webpack')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const isProd = process.env.NODE_ENV === 'production'

module.exports = (env={}) => ({  // env={} so if not specified, env.production === false, development mode
  context: path.resolve(__dirname,'src'),
  // context: __dirname + "/app",
  entry: {
    index: "./index.js",
    news: "./News/index.js",
    // page2: "./page2.js",
  },
  output: {
    path: path.resolve(__dirname,"public/dist"),
    filename: "[name].chunk.js",
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        // "test" is commonly used to match the file extension
        test: /\.jsx?$/,
        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, "src")
        ],
        // the "loader"
        loader: "babel-loader",
        options: {},
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(ttf|woff|jpeg|jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/",
              // publicPath: "assets/",   //what is this for? you don't need it in html
              name: '[name]--[hash:base64:5].[ext]'
            }
          }
        ]
      }
    ],
    // [
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: "style-loader",
    //     use: "css-loader"
    //   })
    // ]
  },
  devtool:"cheap-module-eval-source-map",//"cheap-module-eval-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:!env.production,
      compress:env.production,
    }),
    new webpack.optimize.CommonsChunkPlugin("commons"),//output will be commons.chunk.js
    // new ExtractTextPlugin("style.css"),
  ],
  devServer: {
    contentBase: path.resolve(__dirname,"public"),
    proxy: {
      '/api':{
        target: 'http://localhost:3001',
        secure:false
      }
    }
  }
})
