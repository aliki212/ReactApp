const path = require("path");
const postCSSPlugins = [            // added for CSS - travel-site tutorial
  require('postcss-import'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: "./app/main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "app"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        rules: [                            // added for CSS - travel-site tutorial
          {
            test: /\.css$/i,
            use: [
              'style-loader',
              'css-loader?url=false',
              {
                loader: 'postcss-loader',
                options: { plugins: postCSSPlugins }
              }]
          }
        ]
      }, //
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}
