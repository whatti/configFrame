import Vue from 'vue'
import MeUI from '../src/index'
import app from './app'

Vue.use(MeUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(app),
})
