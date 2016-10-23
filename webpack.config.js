var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {test: /\.vue$/,loader: 'vue'},
      {test: /\.js$/,loader: 'babel',exclude: /node_modules/},
      {test: /\.css$/,loader: 'style!css'},
      {test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,loader: 'file'},
      {test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,loader: 'file',query: {name: '[name].[ext]?[hash]'}}
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins:[
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false}, output: { comments: false} })
  ],
  devtool: '#eval-source-map'
}
