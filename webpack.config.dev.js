const path = require("path");
const ip = require("ip");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanTerminalPlugin = require("clean-terminal-webpack-plugin");
const WebpackMessages = require("webpack-messages");
const Dotenv = require("dotenv-webpack");

const port = 4080;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@styles": path.resolve(__dirname, "src/style"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@config": path.resolve(__dirname, "config.js"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/images"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@context": path.resolve(__dirname, "src/context"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(png|jpg|gif|ico|mp4)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(s[ac]ss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      }
    ],
  },
  plugins: [
    new Dotenv(),
    new CleanTerminalPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/main.css",
    }),
    new WebpackMessages({
      name: "client",
      logger: (str) =>
        console.log(
          `\n\nApp running in http://${ip.address()}:${port} \n\n ${str}`
        ),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    headers: {
      'X-Frame-Options': 'sameorigin'
    },
    compress: true,
    historyApiFallback: true,
    port,
  },
};