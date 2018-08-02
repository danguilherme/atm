var path = require("path");

module.exports = {
  // Change to your "entry-point".
  entry: "./src/index",
  mode: "production",
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
        // Include ts, tsx, and js files.
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
