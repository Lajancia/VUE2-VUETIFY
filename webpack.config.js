//webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'main.js')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      },
       {
            test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
            use: [
                'url-loader?name=assets/[name].[ext]',
            ]
        }],
    },
   resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
  },
};