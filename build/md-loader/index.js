const md = require('./config')
const { stripScript } = require('./utils')
cosnt { stripTemplate,stripScript,stripStyle } = require('./utils')

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
  //while (commentStart !== -1 && commentEnd !== -1) {
  output.push(content.slice(start, commentStart)) //剔除注释开始Tag
  const commentContent = content.slice(commentStart+startTag.length,commentEnd)//获取注释内容

  const html = stripTemplate(commentContent)  //获取组件template信息
  const script = stripScript(commentContent)  //获取组件script信息
  console.log(output)
  //}

  return `<template><div>
  ${content}
  </div></template>`
}
