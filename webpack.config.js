var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3001
    },
    devtool: 'source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.(js|jsx|es6)$/,
                loaders: ['babel?presets[]=react,presets[]=es2015'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.eot/,
                loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
            },
            {
                test: /bootstrap\.css/,
                loader: 'css-loader?root=./node_modules/bootstrap/dist/',
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })

    ]
};
//var path = require('path');
//var webpack = require('webpack');
//var merge = require('merge');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//
//var webpackConfig = {
//    output: {
//        path: path.join(__dirname, 'dist'),
//        filename: 'bundle.js',
//        publicPath: '/static/'
//    },
//    plugins: [
//        new webpack.optimize.OccurenceOrderPlugin(),
//        new webpack.NoErrorsPlugin()
//    ]
//};
//
//if (process.env.NODE_ENV === 'production') {
//
//    webpackConfig = merge(webpackConfig,{
//        devtool: "source-map",
//        entry : [
//            './src/client/index.js'
//        ],
//        module: {
//            loaders: [{
//                test: /\.js$/,
//                loader: 'babel',
//                exclude: /node_modules/,
//                include: __dirname
//            },
//                { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
//                { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') }
//            ]},
//        plugins : [
//            new webpack.DefinePlugin({
//                'process.env': {
//                    NODE_ENV: JSON.stringify('production')
//                }
//            }),
//            new ExtractTextPlugin("app.css"),
//            new webpack.optimize.UglifyJsPlugin({minimize: true})
//        ]
//    });
//
//}else{
//
//    webpackConfig = merge(webpackConfig,{
//        devtool: 'inline-source-map',
//        module: {
//            loaders: [{
//                test: /\.js$/,
//                loader: 'babel',
//                exclude: /node_modules/,
//                include: __dirname,
//                query: {
//                    optional: ['runtime'],
//                    stage: 2,
//                    env: {
//                        development: {
//                            plugins: [
//                                'react-transform'
//                            ],
//                            extra: {
//                                'react-transform': {
//                                    transforms: [{
//                                        transform:  'react-transform-hmr',
//                                        imports: ['react'],
//                                        locals:  ['module']
//                                    },
//                                        {
//                                            transform: 'react-transform-catch-errors',
//                                            imports: ['react','redbox-react' ]
//                                        }
//                                    ]}
//                            }
//                        }
//                    }
//                }
//            },
//                { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
//                { test: /\.css$/, loader: 'style-loader!css-loader' }
//            ]},
//        entry : [
//            'webpack-hot-middleware/client',
//            './src/client/index.js'
//        ],
//        plugins : [
//            new webpack.HotModuleReplacementPlugin()
//        ]
//    });
//
//}
//
//module.exports = webpackConfig;
