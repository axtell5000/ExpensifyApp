const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// path uses an absolute path, so we must use node path and __dirname, public is a folder in our project to put
// bundle.js in
// use - to include multiple loaders


module.exports = (env) => {

  console.log('env', env);

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: "bundle.js"
    },
    resolve: {
      alias: {
        'moment$': 'moment/moment',
      }
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
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    // makes debugging slightly easier in dev , production will be different
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // need this to fix the 404 error we get on dev
      publicPath: '/dist/'
    }
  };
};
