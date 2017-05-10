const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    devtool: isProd ?
        false : '#cheap-module-source-map',
    output: { //打包配置
        path: path.resolve(__dirname, '../dist'), //输出目录
        publicPath: '/dist/',
        filename: '[name].server.[chunkhash].js' //文件名命名规则
    },
    resolve: {
        alias: { //公共路径指向的别名
            'public': path.resolve(__dirname, '../public')
        }
    },
    module: {
        noParse: /es6-promise\.js$/, // 加载文件的解决方案
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: isProd ?
                    ExtractTextPlugin.extract({
                        use: 'css-loader?minimize',
                        fallback: 'vue-style-loader'
                    }) : ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }
        ]
    },
    performance: {
        maxEntrypointSize: 300000,
        hints: isProd ? 'warning' : false
    },
    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new ExtractTextPlugin({
            filename: 'common.[chunkhash].css'
        }),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ] : [
        new FriendlyErrorsPlugin()
    ]
}