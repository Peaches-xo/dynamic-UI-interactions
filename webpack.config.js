const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Custom template',
        //   template: './dist/index.html',
           template: path.join(__dirname, "src/indextemplate.html"),
          inject: false,
        })
      ],
	output: {
      
        filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
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