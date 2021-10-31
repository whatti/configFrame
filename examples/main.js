import Vue from 'vue'
import MeUI from '../src/index'
import app from './app'
import router from './router'

Vue.use(MeUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(app),
  router,
})
