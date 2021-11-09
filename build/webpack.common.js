const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = require('./config')

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.js'], //入口文件，传入一个对象
  },
  output: {
    path: path.resolve(process.cwd(), './lib'), //绝对路径
    publicPath: '/dist/', //相对于服务(server-relative)
    filename: 'me-vue-ui.common.js',
    chunkFilename: '[id].js',
    library: {
      type: 'commonjs2', //配置将库暴露的方式
      export: 'default', //指定哪一个导出应该被暴露为一个库
    },
  },
}
