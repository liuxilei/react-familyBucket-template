const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-eval-source-map",
	devServer: {
		overlay: true, //将报错信息提示到页面上
		contentBase: path.join(__dirname, "./release"), //根目录
		open: true, //自动打开浏览器
		host: "0.0.0.0",
		port: 8080, //端口
	},
});
