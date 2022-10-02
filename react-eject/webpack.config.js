const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const modeENV =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "[name].[hash].bundle.js",
    publicPath: "/", // 定義 webpack dev server 中 html 引入 file 的根路徑
  },
  mode: modeENV, // development => 開發模式，不會壓縮檔案 / production => 產品模式，會壓縮檔案
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/base.html", // 依 public 的 index.html 做複製用的模板給 output 的 index.html
    }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          }, // use rules 是有序的 ( 由下到上執行 )
        ],
      },
      // babel => 編譯 es6 以上語法至 es5 語法( 為了讓各版本瀏覽器支援 )
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
