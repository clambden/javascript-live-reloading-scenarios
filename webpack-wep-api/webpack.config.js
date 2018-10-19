const path = require("path");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = {
    mode: 'development',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    entry: [
        "./src/index.js"
    ],    
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build"),
    },
    plugins: [
      new StartServerPlugin("bundle.js"),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
};