const md = require('./config')
const { stripTemplate, stripScript, genInlineComponentText } = require('./utils')

module.exports = function (source) {
  const content = md.render(source)
  //处理注释Tag 开始结束的名称和长度
  const startTag = '<!--meui-demo:'
  const startTagLen = startTag.length
  const endTag = ':meui-demo-->'
  const endTagLen = endTag.length

  let componentsString = ''
  let id = 0 //demo的id
  let output = [] //返回的代码字符串
  let start = 0 //字符串开始的位置

  let commentStart = content.indexOf(startTag) //获取注释开始Tag内容起始位置
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen) //结束Tag相对于注释开始Tag的偏移位置
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart)) //剔除注释开始Tag
    const commentContent = content.slice(commentStart + startTag.length, commentEnd) //获取注释内容

    const html = stripTemplate(commentContent) //获取组件template信息
    const script = stripScript(commentContent) //获取组件script信息
    let demoComponentContent = genInlineComponentText(html, script) //转成一个内联组件
    const demoComponentName = `meui-demo${id}` //内联组件名称
    console.log(html)
    output.push(`<template slot="source"><${demoComponentName} /></template>`) //使用slot插槽
    componentsString = `${JSON.stringify(demoComponentName)}:${demoComponentContent},` //页面组件注册
    //重新计算下一次的位置
    id++
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }
  //仅允许在demo不存在时，才可以在markdown中写script标签
  let pageScript = ''
  if (componentsString) {
    pageScript = `<script>
      export default {
        name:'component-doc',
        components:{
          ${componentsString}
        }
      }
    </script>`
  } else if (content.indexOf('<script>' === 0)) {
    // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length
    pageScript = content.slice(0, start)
  }
  output.push(content.slice(start))

  return `<template><section class="content me-doc">
  ${output.join('')}
  </section></template>
  ${pageScript}`
}
