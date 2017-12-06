const path = require('path');

module.exports = (env) => {
  return {
    context: __dirname,
    recordsPath: path.resolve(__dirname, 'records.json'),
    entry: {
      'a': './a.js',
    },
    output: {
      filename: `[name].js`,
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'cache-loader',
              options: {}
            }
          ],
        }
      ],
    },
  };
};
