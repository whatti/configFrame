const Config = require('markdown-it-chain') //链函数式配置markdown-it的设置
const anchorPlugin = require('markdown-it-anchor') //标题锚点生成插件
const slugify = require('transliteration').slugify //汉字转拼音插件
const containers = require('./containers')
// const overWriteFenceRule = require('./fence')

//实例化配置对象
const config = new Config()
//使用链式API调用配置
config.options //markdown-it选项配置
  .html(true) //在源码中启用html标签
  .end()

  //插件配置
  .plugin('anchor')
  //标题锚点生成插件
  //第一个参数：使用的插件模块  第二个参数：插件配置模块
  .use(anchorPlugin, [
    {
      level: 2, //最少包含的渲染层级
      slugify: slugify, //生成有效url的自定义函数
      permalink: true, //是否在标题旁加入永久链接
      permalinkBefore: true, //将永久链接放在标题前面
    },
  ])
  .end()
  //自定义容器内容:::name
  .plugin('containers')
  .use(containers)
  .end()
//使用上述配置创建一个markdown-it的实例
const md = config.toMd()

module.exports = md
