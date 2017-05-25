<template>
  <div>
    <h3>基础用法</h3>
    <div class="component-container">
      <lx-button>默认按钮</lx-button>
      <lx-button type="primary">主要按钮</lx-button>
      <lx-button type="text">文字按钮</lx-button>
      <div class="teach-container">
        <Highlight :contexts="basicBtns" code="html"></Highlight>
        <div class="describe">
          Button 组件默认提供7种主题，由type属性来定义，默认为default。
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Highlight from '../components/high-light.vue'
  export default{
    data () {
      return {
        basicBtns: [
          '<lx-button>默认按钮</lx-button>',
          '<lx-button type="primary">主要按钮</lx-button>',
          '<lx-button type="text">文字按钮</lx-button>'
        ]
      }
    },
    components: {
      Highlight
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../style/index";
</style>
