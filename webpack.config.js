module.exports = {
	entry: {demo: './demo/index.js'},
	output: {
		path: __dirname,
		filename: '[name]/public/bundle.js',
		publicPath: 'static'

	},
	module: {
		loaders: [{
			text: /\.js$/,
			loader:'babel-loader',
			query:{
				presets:['react','es2015']
			}
		}]
	}
}