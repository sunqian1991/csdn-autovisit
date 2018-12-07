var path = require('path');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "./src")],
        loader: "babel-loader",
        options: {
          "plugins": [
            ["transform-runtime", {
              "helpers": false,
              "polyfill": false,
              "regenerator": true,
              "moduleName": "babel-runtime"
            }]
          ],
          presets: ["es2015", "stage-0"]
        },
      }
    ]
  }
};
