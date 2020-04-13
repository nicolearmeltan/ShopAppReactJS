const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'react-hot-loader/patch',
    './src/index.js',
    './src/index.html'
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
                plugins: [
                    '@babel/plugin-proposal-class-properties', 
                    "react-hot-loader/babel"
                  ]
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
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader'
          },
        ],
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
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
    })
  ],
  resolve: {
    alias: {
      'react-hot-loader': path.resolve(path.join(__dirname, './node_modules/react-hot-loader')),
      // add these 2 lines below so linked package will reference the patched version of `react` and `react-dom`
      'react': path.resolve(path.join(__dirname, './node_modules/react')),
      'react-dom': path.resolve(path.join(__dirname, './node_modules/react-dom')),
      // or point react-dom above to './node_modules/@hot-loader/react-dom' if you are using it
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'eval'
};