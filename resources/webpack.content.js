module.exports = () => {
  return `// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  mode: 'development',
  entry: [
    './src/index.ts',
    './src/index.css'
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: {
    'express-favicon': {
      commonjs: 'express-favicon',
      commonjs2: 'express-favicon',
      amd: 'express-favicon',
      root: 'express-favicon',
    },
    path: {
      commonjs: 'path',
      commonjs2: 'path',
      amd: 'path',
      root: 'path',
    },
    express: {
      commonjs: 'express',
      commonjs2: 'express',
      amd: 'express',
      root: 'express',
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          }
        ]
      },
      {
        test: /.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}; 
  `;
};
