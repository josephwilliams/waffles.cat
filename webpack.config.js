module.exports = {
  context: __dirname,
  entry: "./frontend/entry.js",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map'
};


// (NOTE) had to npm install 'babel-preset-stage-2' for ES6 spread operator (...args) to work,
// as well as add 'stage-2' to presets.  See:
// http://stefan.magnuson.co/articles/frontend/using-es7-spread-operator-with-webpack/
