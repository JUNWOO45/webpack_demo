const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/js')
      ],
      exclude: /node_modules/,
      // use: ['style-loader', 'css-loader']
      use: {
        loader: 'babel-loader',
        options: {
          "presets": ["@babel/preset-env"],
          "plugins": ["@babel/plugin-proposal-class-properties"]
        }
      }
    }]
  }
};
