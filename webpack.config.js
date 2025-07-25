const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	mode: 'development',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.hbs$/,
				use: ['handlebars-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Calculator',
			template: './src/index.hbs',
			description: 'Task 4',
		}),
	],
};
