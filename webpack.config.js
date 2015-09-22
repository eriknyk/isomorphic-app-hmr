var webpack = require('webpack');
var path = require('path');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './client.js'
  ],
  output: {
    path: path.join(__dirname, 'public/js/'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        stage: 0,
        plugins: [
          'react-transform'
        ],
        extra: {
          'react-transform': [{
            target: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module']
          }]
        }
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  progress: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

// enable React Hot loader
// console.log('-------------->', process.env.HOT);
// if (process.env.HOT) {
//   config.module.loaders[0].query.plugins.push('react-transform');
//   config.module.loaders[0].query.extra = {
//     'react-transform': [{
//       target: 'react-transform-hmr',
//       imports: ['react'],
//       locals: ['module']
//     }]
//   };
// }

module.exports = config;
