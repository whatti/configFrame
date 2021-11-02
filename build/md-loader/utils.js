const { compileTemplate } = require('@vue/component-compiler-utils')
const compiler = require('vue-template-compiler')

//获取<script>标签中的内容
function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\l>/)
  return result && result[2] ? result[2].trim() : ''
}

//获取style标签中的文本内容
function stripStyle(content) {
  const result = content.match(/<(style)>([\s\S]+)<\/\l>/)
  return result && result[2] ? result[2].trim() : ''
}

//编写例子时不一定有template。所以采取的方案是剔除其他内容
function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|sstyle)>([\s\S])+<\/\l>/g, '').trim()
}

//参考templateLoader.js源码
//将自定义容器中的 代码块 转成一个个内联component注入到整个页面中
function genInlineComponentText(template, script) {}

module.exports = {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText,
}
