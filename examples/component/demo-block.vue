<template>
  <!-- 使用绑定来动态设置calss -->
  <div class="demo-block" :class="[blockClass, { hover: hovering }]" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-clock-control" ref="control" @click="isExpanded = !isExpanded">
      <span>{{ controlTest }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hovering: false,
      isExpanded: false,
    }
  },
  computed: {
    blockClass() {
      //路由不同，class不同
      return `demo-${this.$router.currentRoute.path.split('/').pop()}`
    },
    controlTest() {
      //展开，未展开时信息不同
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    //包含代码块的直接父元素
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    //完全展开代码块所需要的高度
    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    },
  },
  watch: {
    isExpanded: function (val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      //   if (!val) {
      //   }
    },
  },
}
</script>
<style>
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
.demo-block .source {
  padding: 24px;
}
.demo-block .meta {
  background-color: #fafafa;
  border-top: solid 1px #eaeefb;
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}
</style>
