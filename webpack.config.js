const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.html',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
            {loader: 'react-hot-loader/webpack'}, 
            {loader: 'babel-loader',
                options: {
                presets: ['@babel/react', '@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        ],
        
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
            loader: 'url-loader',
            options: { 
                limit: false
            } 
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js'
  },
  devtool: 'eval'
};