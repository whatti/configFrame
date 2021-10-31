<template>
  <div>
    <div class="nav"><router-link to="/jsx">JSX</router-link> | <router-link to="/test">test</router-link></div>
    <router-view to="/test">loading组件</router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // seller: null // 有问题
    }
  },
  components: {},
}
</script>
