const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Entry point for the bundle
  entry: "./src/index.js",

  // Output configuration for the bundle
  output: {
    // Output directory as an absolute path
    path: path.resolve(__dirname, "./static/frontend"),
    // Output filename pattern
    filename: "[name].js",
  },

  // Module configuration
  module: {
    // Rules for module (loader) processing
    rules: [
      {
        // Use babel-loader for JavaScript files
        test: /\.js$/,
        // Exclude node_modules directory from processing
        exclude: /node_modules/,
        // Loader to use for processing the matched files
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  // Optimization configuration
  optimization: {
    // Minimize the output files
    minimize: true,
  },

  // Plugins configuration
  plugins: [
    // DefinePlugin to create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      "process.env": {
        // This affects the React library size by setting the environment to production
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
