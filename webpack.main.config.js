module.exports = {
  entry: './src/main.js',
  externals: {
    'realm': 'commonjs realm',
  },
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
};
