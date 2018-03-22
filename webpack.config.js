module.exports = {
  mode: 'development',
  entry: {
    main: './js/app.js'
  },
  output: {
    'filename': 'bundle.js',
    'path': __dirname + '/js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  }
};
