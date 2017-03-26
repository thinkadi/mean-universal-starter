"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var webpackMerge = require('webpack-merge');
var ngtools = require('@ngtools/webpack');
var commonConfig = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    context: __dirname,
    output: {
        publicPath: '',
        filename: '[name].bundle.js'
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig.json',
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
            }
        ]
    }
};
var clientConfig = {
    target: 'web',
    entry: './src/client',
    output: {
        path: path.resolve(__dirname, 'dist/client')
    }
};
var serverConfig = {
    target: 'node',
    entry: './src/server',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/server')
    }
};
exports.default = [
    webpackMerge(commonConfig, clientConfig),
    webpackMerge(commonConfig, serverConfig)
];
