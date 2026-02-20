module.exports = {
  entry: {
    index: './src/main.ts',
  },
  resolve: {
        extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    'realm': 'commonjs realm',
  },
  // Put your normal webpack config below here
  module: {
    rules: [
      ...require('./webpack.rules'),
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.renderer.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.renderer.json',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
