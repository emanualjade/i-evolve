const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'lodash',
  'react-dom',
  'react-router-dom',
];

module.exports = (env) => {
  const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      bundle: './index.js',
      vendor: VENDOR_LIBS,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].[chunkhash].js',
      pathinfo: !!env.dev,
    },
    devtool: env.prod ? 'source-map' : 'eval',
    devServer: {
      // publicPath: '/src/',
      historyApiFallback: true,
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
    ],
  };
  if (env.debug) {
    console.log(config) // eslint-disable-line
    debugger // eslint-disable-line
  }
  return config;
};
