var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Change to your "entry-point".
  entry: "./src/index",
  mode: "production",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?classPrefix"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html"
    })
  ]
};
