const path = require('path');
const webpackMerge = require('webpack-merge');
const ngtools = require('@ngtools/webpack');

const commonConfig: any = {
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
        "test": /\.ts$/,
        "loader": '@ngtools/webpack',
      }, {
        "test": /\.html$/,
        "loader": "raw-loader"
      }
    ]
  }
};

const clientConfig: any = {
  target: 'web',
  entry: './src/browser.ts',
  output: {
    path: path.resolve(__dirname, 'dist/client')
  }
};

const serverConfig: any = {
  entry: {
    main: './src/server.ts'
  },
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'index.js'
  }
};

export default [
  webpackMerge(commonConfig, clientConfig),
  webpackMerge(commonConfig, serverConfig)
];