const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./examples/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "docs", "javascripts"),
    filename: "[name]-[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "template.html"),
      filename: path.join(__dirname, "docs", "index.html"),
      inject: "head"
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: true,
      eslint: {
        files: './src/**/*.{ts,tsx}'
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 10000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm-${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
};
