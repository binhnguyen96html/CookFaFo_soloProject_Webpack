const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./client/src/index.js",
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index_bundle.js",
  },
  target: "web",
  devServer: {
    // port: "3000",
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, "client/public"),
    // },
    open: true,
    hot: true,
    liveReload: true,
    "proxy": [
      {
      context: ['/api'],
      target: 'http://localhost:8000'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader",// Add postcss-loader for processing Tailwind CSS
          
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./client/src/index.css",
      chunkFilename: "./index.css",
      // template: path.join(__dirname, '/client/index.css')
    }),
    // new HtmlWebpackPlugin({
    //   // template: path.join(__dirname, "index.html"),
    //   template: "./index.html",
    // filename: "./index.html"
    // }),
    new HtmlWebpackPlugin({ title: "Development", template: "index.html" }),
  ],
};
