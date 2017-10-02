const path = require('path');

// path uses an absolute path, so we must use node path and __dirname, public is a folder in our project to put
// bundle.js in
// use - to include multiple loaders
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/, //cater for both css and scss
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map ', // makes debugging slightly easier
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
