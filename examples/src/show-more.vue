<template>
  <div>
    <h3>基础用法</h3>
    <div class="component-container">
      <lx-show-more
        :showMoreText="showMoreText"
        :allowFold="true"
        :isFilterHref="true"
        :length='40'>
      </lx-show-more>
      <div class="teach-container">
        <Highlight :contexts="basics" code="html"></Highlight>
        <div class="describe">
          文本超出显示长度，折叠起来，可以通过 allowFold 设置是否允许收起。也可以过滤出a标签，加上超链，可以通过设置 isFilterHref 属性控制
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
        showMoreText: 'this is test, this is showMoreText test http://www.baidu.com showMoreText',
        options: [
          ['moreText', '超出字符限制后需要现实的文案', 'String', '-', '展开'],
          ['overText', '全部展开后需要现实的文案', 'String', '-', '收起'],
          ['showMoreText', '需要shoreMore的文本', 'String, Number', '是', '-'],
          ['length', 'showMoreText最长尺寸', 'Number', '-', '20'],
          ['allowFold', '是否允许收起', 'Boolean', '-', 'true'],
          ['isFilterHref', '是否标记a标签', 'Boolean', '-', 'true']
        ],
        events: [
          ['changeText', '改变文本长度时触发', '-']
        ],
        basics: [
          '<lx-show-more :showMoreText="showMoreText" :allowFold="true" :isFilterHref="true" :length="20"></lx-show-more>'
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
