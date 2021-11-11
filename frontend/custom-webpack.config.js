const webpack = require('webpack');
console.log("testing webpack");
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        ENVIRONMENT: JSON.stringify(process.env.ENVIRONMENT),
        ENV_BACKEND_URI:JSON.stringify(process.env.ENV_BACKEND_URI)
      }
    })
  ]
};
