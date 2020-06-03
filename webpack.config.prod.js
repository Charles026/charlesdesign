const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode:'production',
    entry:[
        './src/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
      },
    optimization:{
        minimizer : [
            new OptimizeCssAssetsPlugin()
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            title: 'charles.design',
            template: path.resolve('./src/index.html'),
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module:{
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        outputpath: './images',
                        name: 'images/[hash].[ext]'
                    }
                  }
                ]
              },
              {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                  }
                }
              },
          ],
       
        
    }
};