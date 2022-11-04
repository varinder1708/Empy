const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const clientConfig = {
  mode:'development',
  devtool:'source-map',
  output: {
    path: path.join(__dirname, "/public"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};
const serverConfig = {
  entry:'./server.js',
  target: 'node',
  externals: [nodeExternals()],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/"), // the bundle output path
    filename: "server.bundle.js", // the name of the bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
      //   loader: "url-loader",
      //   options: { limit: false },
      // },
    ],
  },
  plugins: [
    // new webpack.BannerPlugin({
    //   banner: 'require("source-map-support").install();',
    //   raw: true,
    //   entryOnly: false
    // }),
    // new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
};
module.exports=[clientConfig,serverConfig];