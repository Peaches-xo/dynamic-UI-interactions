const path = require('path');

	module.exports = {
    mode: 'development',
	entry: './src/index.js',
	    // 	entry: {
	    // 	index: './src/index.js'
	    // 	print: './src/print.js',
	// },
    // devtool: 'inline-source-map',
    // devServer: {
    //     static: './dist'
    // },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
	output: {
        // filename: 'main.js',
        filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
        //clean: true,
	},
     module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
	};