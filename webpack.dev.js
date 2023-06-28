const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';


module.exports = () => merge(commonConf({ outputFile }), {
    mode: 'development',
    devtool: 'source-map',
    watch: true,
});