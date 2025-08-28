const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true // 替代 CleanWebpackPlugin
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
            watch: true
        },
        hot: true,
        open: true,
        compress: true,
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'charles.design',
            template: path.resolve('./src/index.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'globalpay.html',
            template: path.resolve('./src/globalpay.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'dtp.html',
            template: path.resolve('./src/dtp.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'digitaltrader.html',
            template: path.resolve('./src/digitaltrader.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'openplay.html',
            template: path.resolve('./src/openplay.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'alphads.html',
            template: path.resolve('./src/alphads.html'),
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            filename: 'audioguide.html',
            template: path.resolve('./src/audioguide.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'daispouch.html',
            template: path.resolve('./src/daispouch.html'),
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
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
                test: /\.(jpg|jpeg|gif|png|svg|webp|mp4|webm)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};