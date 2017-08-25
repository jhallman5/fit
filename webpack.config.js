module.exports = options => {
  return {
    entry: './src/views/components/index.js',
    // entry: './src/views/store.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [ "es2015", "stage-1", "react"],
                plugins: ["transform-decorators-legacy"]
              },
            },
          ],

        },
      ],
    },
  }
}
