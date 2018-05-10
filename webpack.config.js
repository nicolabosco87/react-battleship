const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist-client')
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  },

  module: {
    rules: [

      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          configFileName: 'client/tsconfig-client.json'
        }
      },
        /*{
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        },*/
        /*{
          test: /\.scss$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ]
        }*/
      ]

  },

  plugins: [
    new CleanWebpackPlugin(['dist-client']),
    new HtmlWebpackPlugin({
        template: './client/index.html'
      })
  ]

}