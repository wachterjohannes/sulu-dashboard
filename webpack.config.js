var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = 'development';
var plugins = [new ExtractTextPlugin('bundle.css')];
if (process.env.npm_lifecycle_event === 'build') {
    env = 'production';
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}
plugins.push(new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify(env),
    }
}));

module.exports = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public', 'assets'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                camelCase: true,
                            },
                        },
                        'postcss-loader',
                    ],
                }),
            },
        ]
    }
};
