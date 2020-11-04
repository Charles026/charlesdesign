const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode:'development',
    entry:{
      main: './src/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
      },
    devtool:'source-maps',
    devServer: {
        contentBase: path.join(__dirname,'src'),
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true,
      },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'charles.design',
            template: path.resolve('./src/index.html'),
        }),
        new HtmlWebpackPlugin(
          {  // Also generate a about.html
          filename: 'alphads.html',
          template: path.resolve('./src/alphads.html'),
          chunks: ['main']
        },),
        new HtmlWebpackPlugin({
          filename: 'about.html',
          template: path.resolve('./src/about.html'),
          chunks: ['main']
        }),
        new HtmlWebpackPlugin({
          filename: 'audioguide.html',
          template: path.resolve('./src/audioguide.html'),
          chunks: ['main']
        }),
        new HtmlWebpackPlugin({
          filename: 'starbucksapp.html',
          template: path.resolve('./src/starbucksapp.html'),
          chunks: ['main']
        }),
        new HtmlWebpackPlugin({
          filename: 'sponiaapp.html',
          template: path.resolve('./src/sponiaapp.html'),
          chunks: ['main']
        }),
        
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          'window.$': 'jquery',
          Popper: ['popper.js', 'default']
        })
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
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|webp|mp4|webm)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        outputpath: './images',
                        name: 'dirname/[hash].[ext]'
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