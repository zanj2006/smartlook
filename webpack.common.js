const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // cacheGroupKey here is `commons` as the key of the cacheGroup
                    name(module, chunks, cacheGroupKey) {
                      const moduleFileName = module
                        .identifier()
                        .split('/')
                        .reduceRight((item) => item);
                      const allChunksNames = chunks.map((item) => item.name).join('~');
                      return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                    }
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Users & Posts & Comments',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/default.css'
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: [
                    /node_modules/,
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        retainLines: true,
                        presets: [
                            [
                                '@babel/env',
                                {
                                    corejs: '3.18.3',
                                    modules: false,
                                    useBuiltIns: 'entry',
                                    targets: '> 0.1%, not dead, IE 11',
                                },
                            ],
                            '@babel/react',
                            '@babel/typescript',
                        ],
                        plugins: [
                            '@babel/proposal-object-rest-spread',
                            '@babel/proposal-class-properties',
                            'babel-plugin-styled-components',
                            '@babel/transform-runtime',
                        ],
                    },
                },
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // options...
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    }
}
