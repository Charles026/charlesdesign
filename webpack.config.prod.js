const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = function (env, argv) {
  return {
    mode: 'production',
    entry:['./src/app.js'],
    output: {
      path: __dirname + '/dist',
      filename: '[name].[contentHash].bundle.js',
      publicPath: './'
    },
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin()
      ]
    }
    ,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        template: path.resolve('./src/index.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),

      new HtmlWebpackPlugin({  // Also generate a alpha.html
        filename: 'globalpay.html',
        template: path.resolve('./src/globalpay.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a alpha.html
        filename: 'dtp.html',
        template: path.resolve('./src/dtp.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a alpha.html
        filename: 'digitaltrader.html',
        template: path.resolve('./src/digitaltrader.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a alpha.html
        filename: 'openplay.html',
        template: path.resolve('./src/openplay.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a alpha.html
        filename: 'alphads.html',
        template: path.resolve('./src/alphads.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a audioguide.html
        filename: 'audioguide.html',
        template: path.resolve('./src/audioguide.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a audioguide.html
        filename: 'daispouch.html',
        template: path.resolve('./src/daispouch.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a starbucksapp.html
        filename: 'starbucksapp.html',
        template: path.resolve('./src/starbucksapp.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new HtmlWebpackPlugin({  // Also generate a sponiaapp.html
        filename: 'sponiaapp.html',
        template: path.resolve('./src/sponiaapp.html'),
        favicon: path.resolve('./src/images/favicon.ico')
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[id].css"
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
        Popper: ['@popperjs/core', 'default']
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                api: "modern-compiler",
                sassOptions: {
                  quietDeps: true,
                  silenceDeprecations: ["legacy-js-api", "import", "color-functions"]
                }
              }
            }
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp|mp4|webm)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash][ext]'
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          }
        },
      ]
    }
  };
}