const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  module: {
    loaders: [ 
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }]
  }
}