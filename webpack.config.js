const path = require('path');
const CoolPlugin = require('./plugin');

module.exports = {
  mode: 'development',
  watch: true,
  stats: false,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CoolPlugin(),
    new CoolPlugin(true),
    new CoolPlugin()
  ]
};
