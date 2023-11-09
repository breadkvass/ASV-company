const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV,
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('babel-loader'),
              },
            ],
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpeg|jpg|svg|gif)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2)$/,
          type: 'asset/resource',
        },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash:8].js",
    clean: true,
    // publicPath: "/assets/"
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: "public/favicon.ico",
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};