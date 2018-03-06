const path = require('path');

module.exports = {
	entry: "./src/index.js",
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".wasm"]
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},
};