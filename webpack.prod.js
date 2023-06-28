const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const outputFile = '[name]';

module.exports = () => merge(commonConf({ outputFile }), {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // console.log を出力するかどうか
                    },
                },
            }),
        ],
    }
});