const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
	entry: {
		main: './src/server.ts'
	},
	resolve: {
      extensions: ['.ts', '.js']
    },
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist/server'),
		filename: 'index.js'
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
}
