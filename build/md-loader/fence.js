//覆盖默认的fence渲染策略
module.exports = (md) => {
  const defaultRender = md.renderer.rules.fence //对于token的渲染规则，可以被更新和扩展
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    // token 即containers内部的tokens数组，其中code标签变为一个Token对象，type为fence
    //   Token {
    //     type: 'fence',
    //     tag: 'code',
    //     attrs: null,
    //     map: [ 9, 12 ],
    //     nesting: 0,
    //     level: 1,
    //     children: null,
    //     content: '<me-loading loading-text="页面加载中......"></me-loading>\n',
    //     markup: '```',
    //     info: 'html',
    //     meta: null,
    //     block: true,
    //     hidden: false
    //   },
    //idx 为fence在tokens数组中的位置
    //options md配置信息
    //{
    //   html: true,
    //   xhtmlOut: false,
    //   breaks: false,
    //   langPrefix: 'language-',
    //   linkify: false,
    //   typographer: false,
    //   quotes: '“”‘’',
    //   highlight: null,
    //   maxNesting: 100
    // }
    //env
    //self md对象
    const token = tokens[idx]
    //判断该fence是否在:::demo内
    const preToken = tokens[idx - 1]
    const isInDemoContainer = preToken && preToken.nesting === 1 && preToken.info.trim().match(/^demo\s*(.*)$/)
    if (token.info === 'html' && isInDemoContainer) {
      //v-pre是vue自带的指令，用来显示原始Mustache标签。考虑到代码片段会包含Mustache标签，使用该指令来跳过对code的编译
      return `<template slot="highlight"><pre v-pre>
      <code class="html">${md.utils.escapeHtml(token.content)}</code>
      </pre></template>`
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}
