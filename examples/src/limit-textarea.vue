<template>
  <div>
    <h3>基础用法</h3>
    <div class="component-container">
      <lx-limit-textarea v-model="content" :rows="6" :isCut="true" placeholder="最多输入20个字符"></lx-limit-textarea>
      <div class="teach-container">
        <Highlight :contexts="basics" code="html"></Highlight>
        <div class="describe">
          限制输入字符数
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
  </div>
</template>
<script>
  import Highlight from '../components/high-light.vue'
  export default{
    data () {
      return {
        content: '',
        options: [
          ['rows', '列高', 'Number', '-', '4'],
          ['maxLength', '最大长度限制', 'Number', '-', '20'],
          ['isCut', '超出字符是否裁剪', 'Boolean', '-', 'false'],
          ['placeholder', 'placeholder', 'String', '-', '请输入内容']
        ],
        events: [
          ['overText', '超出限制长度触发', 'content']
        ],
        basics: [
          '<lx-limit-textarea :rows="6" :isCut="true" placeholder="最多输入20个字符"></lx-limit-textarea>'
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
