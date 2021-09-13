const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'front');
const OUTPUT_DIR = path.resolve(__dirname, 'static/assets');

module.exports = {
  mode: 'production',

  entry: {
    index: path.resolve(__dirname, 'front/index.jsx'),
  },

  output: {
    path: OUTPUT_DIR,
    publicPath: '/assets',
    filename: 'js/main.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': SRC_DIR,
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
            },
          },
        ],
      },
    ],
  },
};
