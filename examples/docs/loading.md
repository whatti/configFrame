<!-- ## Loading 组件 -->

<!-- 加载数据时显示功效。 -->
<!-- :::demo会在container插件中编写的自定义处理函数处理，将:::demo 和 :::替换为其返回值 -->
<!-- 处理函数执行两次，第一次返回:::demo的替换，第二次返回:::的替换 -->
:::demo Loading的基础用法

<me-loading loading-text="页面加载中......"></me-loading>
<!-- 下面的规则是用<code>标签包裹```html内的文本，code标签认为内部内容是源代码，但编译不会进行编译，而是显示为代码文本 -->
```html
<me-loading loading-text="页面加载中......"></me-loading>
```

:::