const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // 符合的副檔名
        use: ["style-loader", "css-loader"], // 使用的 loader => 順序: style-loader -> css-loader (不照順序會出錯)
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 自動清理舊的 output files p.s.中文文檔對於此套件的描述尚未更新
    new HtmlWebpackPlugin({
      title: "Output Management",
    }), // 用於自動建構 html file，並且自動解析應該引入的 entry files
  ],
};
