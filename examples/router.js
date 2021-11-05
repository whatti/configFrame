import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/*webpackChunkName:"index"*/ './app.vue'),
  },
]
routes.push({
  path: '/loading-zu-jian',
  redirect: '/test',
})
routes.push({
  path: '/test',
  name: 'test',
  component: () => import(/*webpackChunkName:"test"*/ './docs/loading.md'),
})

routes.push({
  path: '/jsx',
  name: 'jsx',
  component: () => import(/*webpackChunkName:"jsx"*/ './component/JSX.vue'),
})

export default new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV !== 'production' ? '/' : '/me-ui',
  routes,
})
