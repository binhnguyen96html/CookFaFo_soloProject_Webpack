const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { index: "./client/src/index.js" },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  watch: true,
  target: "web",
  devServer: {
    // port: "3000",
    historyApiFallback: true,
    // static: {
    //   publicPath: "/build",
    //   directory: path.join(__dirname, "build"),
    // },
    open: true,
    hot: true,
    liveReload: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:8000",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({ title: "Development", template: "index.html" }),
  ],
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
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",

          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("tailwindcss"), require("autoprefixer")],
              },
              // ident: "postcss",
              // plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          }, // Add postcss-loader for processing Tailwind CSS
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
};
