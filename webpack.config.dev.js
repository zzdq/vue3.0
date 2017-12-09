// 根据参照文件生成index.html
var HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装

// 导出
module.exports = {
    entry: './src/main.js', //入口
    module: {
        rules: [
            {
            test: /\.vue$/, //正则匹配
            use: [{
                loader: "vue-loader"
            }]
        },
        {
            test: /\.css$/, //正则匹配
            use: [
                {loader: "vue-style-loader"},
                {loader: "css-loader"}
            ]
        },
        {
            test: /\.(ttf|png|gif|svg)$/, //正则匹配
            use: [
                {loader: "file-loader"}
            ]
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html', //参照文件
            filename: 'index.html' //生成的index.html
        })
    ]
}