<template>
  <div class="me-loading">{{ loadingText }}</div>
</template>

<script>
export default {
  name: 'me-loading',
  props: {
    loadingText: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      // seller: null // 有问题
    }
  },
  components: {},
}
</script>
<style>
.me-loading {
  color: red;
}
</style>
