import Loading from './src/main'

//插件应该暴露一个install方法
//第一个参数是Vue构造器，第二个参数是一个可选的选项对象
Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading) //使用component注册组件
}
//到处组件
export default Loading
