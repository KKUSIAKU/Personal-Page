var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");


var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  "entry": {
    style: "./src/styles/style.css",
    main: "./src/App.js",
    waypoint:"./src/scripts/waypoints.js",
    index:"./src/scripts/index.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [

          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
      {
        test:/\.(png|jpeg|jpg)$/, 
        use:[
          {loader:"file-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ]
  },
  "output": {
    filename: "[name].bundle.js",
    chunkFilename: "[id].bundle.js",
    path: path.resolve(__dirname + "/docs"),
  },

  plugins: [
    HtmlWebpackPluginConfig
  ]

};