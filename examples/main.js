import Vue from 'vue'
import MeUI from '../src/index'
import app from './app'
import router from './router'
import demoBlock from './component/demo-block'

Vue.use(MeUI)
Vue.component('demo-block', demoBlock)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(app),
  router,
})
