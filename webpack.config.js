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
			loader:'babel',
			query:{
				presets:['react','es2015']
			}
		}]
	}
}