const mdContainer = require('markdown-it-container')
module.exports = (md) => {
  //约定的文档格式
  //:::demo中写演示的例子，:::demo中(fence)中编写代码
  //:::属于markdown中的扩展语法，通过它来自定义容器
  md.use(mdContainer, 'demo', {
    //验证代码块为:::demo :::才进行渲染
    validate(params) {
      //params    demo 加载数据时显示功效。
      return params.trim().match(/^demo\s*(.*)$/)
    },
    //自定义容器demo就被转成了demo-block组件
    render(tokens, idx) {
      // tokens : [
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 0, 1 ],
      //     nesting: 0,
      //     level: 0,
      //     children: null,
      //     content: '<!-- ## Loading 组件 -->\n',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'container_demo_open',
      //     tag: 'div',
      //     attrs: null,
      //     map: [ 2, 11 ],
      //     nesting: 1,
      //     level: 0,
      //     children: null,
      //     content: '',
      //     markup: ':::',
      //     info: 'demo 加载数据时显示功效。',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 4, 5 ],
      //     nesting: 0,
      //     level: 1,
      //     children: null,
      //     content: '<!-- <me-loading loading-text="页面加载中......"></me-loading> -->\n',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 5, 6 ],
      //     nesting: 0,
      //     level: 1,
      //     children: null,
      //     content: '<h1>md</h1>\n',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 7, 8 ],
      //     nesting: 0,
      //     level: 1,
      //     children: null,
      //     content: '<!-- ```html -->\n',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 8, 9 ],
      //     nesting: 0,
      //     level: 1,
      //     children: null,
      //     content: '<!-- <me-loading loading-text="页面加载中......"></me-loading> -->\n',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 9, 10 ],
      //     nesting: 0,
      //     level: 1,
      //     children: null,
      //     content: '<!-- ``` -->\n',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'container_demo_close',
      //     tag: 'div',
      //     attrs: null,
      //     map: null,
      //     nesting: -1,
      //     level: 0,
      //     children: null,
      //     content: '',
      //     markup: ':::',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   },
      //   Token {
      //     type: 'html_block',
      //     tag: '',
      //     attrs: null,
      //     map: [ 12, 13 ],
      //     nesting: 0,
      //     level: 0,
      //     children: null,
      //     content: '<!-- <template></template> -->',
      //     markup: '',
      //     info: '',
      //     meta: null,
      //     block: true,
      //     hidden: false
      //   }
      // ]
      // idx 1
      //还有一个idx为7
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      //:::后的内容那行nesting为1
      if (tokens[idx].nesting === 1) {
        //获取第一行的内容使用markdown渲染html作为组件的描述
        const description = m && m.length > 1 ? m[1] : ''
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        //使用自定义开发组件 demo-block来包裹内容并且渲染代码示例
        // return `<demo-block>
        // ${description ? `<div>${md.render(description)}</div>` : ''}
        // <!--meui-demo: ${content}:meui-demo-->
        // </demo-block>`
        //这里返回的会放在原 :::demo 位置，替换掉:::demo
        return `<div>`
      }
      //这里返回会放在结尾 ::: 位置，并替换
      return `</div>`
    },
  })
  //解析 :::tip :::
  md.use(mdContainer, 'tip')
  //解析 :::waring :::
  md.use(mdContainer, 'warning')
}
