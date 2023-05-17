/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /^(?!.*\.test\.ts$).*\.ts$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.(svg)$/,
                exclude: /(icons).*\.svg$/,
                use: {
                    loader: '@svgr/webpack',
                    options: {
                        svgProps: {
                            focusable: false
                        },
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'removeViewBox',
                                    active: false
                                }
                            ]
                        }
                    }
                }
            },
            {
                test: /(icons).*\.svg$/,
                use: {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgProps: {
                            focusable: false
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(jpe?g|png|gif|mp3)$/i,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    allowTsInNodeModules: true
                }
            }
        ]
    },
    resolve: {
        alias: {
            content: path.resolve(__dirname, 'src/content/index'),
            data: path.resolve(__dirname, 'src/data'),
            fetch: path.resolve(__dirname, 'src/fetch'),
            molecules: path.resolve(__dirname, 'src/components/Molecules'),
            utils: path.resolve(__dirname, 'src/utils')
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            favicon: path.join(__dirname, '/src/assets/faviconDiamond.ico')
        })
    ]
};
