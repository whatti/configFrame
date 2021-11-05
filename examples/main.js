import Vue from 'vue'
import MeUI from '../src/index'
import app from './app'
import router from './router'
import demoBlock from './component/demo-block'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-light.css'

Vue.use(MeUI)
Vue.component('demo-block', demoBlock)

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(app),
  router,
})
