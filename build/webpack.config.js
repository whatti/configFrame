const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './examples/main.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.[name].js',
  },
  devServer: {
    contentBase: './dist',
  },
  //解析，修改解析代码的细节
  resolve: {
    //引入路径的别名
    alias: {
      ...config.alias,
    },
    //自动填充引入文件后缀
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWitespace: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //将小的，即低于limit的图片进行base64编码，以减少http请求
              limit: 8096,
            },
          },
        ],
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: process.cwd(),
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js'),
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      favicon: './public/favicon.ico',
      template: 'public/index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
}
