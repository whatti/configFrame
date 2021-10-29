import Loading from '../packages/loading/index'

//导入组件库所有组件
const components = [Loading]

//定义组件库组件安装的install方法
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component) //注册组件
  })
}

//自动安装，适配用<script src=""></script>方式引入的文件
if (typeof window.Vue !== 'undefined' && window.Vue) {
  install(window.Vue)
}

//导入install和组件
export default {
  install,
  Loading,
}
