const path = require('path');
const webpackMerge = require('webpack-merge');

const commonConfig: any = {
  resolve: {
    extensions: ['.ts']
  },
  context: __dirname,
  output: {
    publicPath: '',
    filename: '[name].bundle.js'
  }
};

const clientConfig: any = {
  target: 'web',
  entry: './src/client',
  output: {
    path: path.resolve(__dirname, 'dist/client')
  }
};

const serverConfig: any = {
  entry: './src/server',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/server')
  }
};

export default [
  webpackMerge(commonConfig, clientConfig),
  webpackMerge(commonConfig, serverConfig)
];