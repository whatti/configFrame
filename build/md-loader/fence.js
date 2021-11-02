//覆盖默认的fence渲染策略
module.exports = (md) => {
  const defaultRender = md.renderer.rules.fence //对于token的渲染规则，可以被更新和扩展
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    //token 即containers内部的tokens数组，其中code标签变为一个Token对象，type为fence
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
    console.log(tokens)
    console.log(idx)
    console.log(options)
    console.log(env)
    console.log(self)
    return defaultRender(tokens, idx, options, env, self)
  }
}
