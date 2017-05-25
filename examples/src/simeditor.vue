<template>
  <div>
    <h3>基础用法</h3>
    <div class="component-container">
      <lx-editor></lx-editor>
      <div class="teach-container">
        <Highlight :contexts="basics" code="html"></Highlight>
        <div class="describe">
          editor 封装了SimEditor功能，并提供对外钩子函数
        </div>
      </div>
    </div>
    <div class="options">
      <h3>Options</h3>
      <ul class="options-container">
        <li>
          <div class="op-header">
            <span>参数</span>
            <span>说明</span>
            <span>类型</span>
            <span>可选值</span>
            <span>默认值</span>
          </div>
        </li>
        <li v-for="option in options">
          <div class="op-body">
            <span v-for="item in option">{{item}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="options">
      <h3>Events</h3>
      <ul class="options-container">
        <li>
          <div class="op-header">
            <span>事件名</span>
            <span>说明</span>
            <span>参数</span>
          </div>
        </li>
        <li v-for="event in events">
          <div class="op-body">
            <span v-for="item in event">{{item}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="options">
      <h3>Methods</h3>
      <ul class="options-container">
        <li>
          <div class="op-header">
            <span>方法名</span>
            <span>说明</span>
            <span>参数</span>
          </div>
        </li>
        <li v-for="method in methods">
          <div class="op-body">
            <span v-for="item in method">{{item}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Highlight from '../components/high-light.vue'
  export default{
    data () {
      return {
        options: [
          ['defaultContent', 'editor默认值', 'String', '-', '-'],
          ['placeholder', 'placeholder', 'String', '-', 'String']
        ],
        events: [
          ['getValue', '获取当前输入的内容', 'value']
        ],
        methods: [
          ['removetext', '清空当前内容', '-']
        ],
        basics: [
          '<lx-editor></lx-editor>'
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
