<template>
  <div class="left-menu">
    <div class="menu-title">
      <p class="version">版本：1.0.0</p>
    </div>
    <div class="menu-title">
      <p>基础组件</p>
      <div class="component" v-for="component in components">
        <span>{{component.name}}</span>
        <ul>
          <li v-for="(cmp,index) in component.group">
            <a @click="active=index" :class="active===index ? 'active' : ''" :href="cmp.href">{{cmp.name}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        active: '',
        components: [{
          name: 'Basic',
          group: [{
            name: 'Button',
            href: '#/button'
          }, {
            name: 'Editor',
            href: '#/editor'
          }, {
            name: 'LimitTextarea',
            href: '#/limitTextarea'
          }, {
            name: 'ShowMore',
            href: '#/showMore'
          }]
        }]
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../style/index";
  .left-menu{
    width: 200px;
    color: @menuText;
    float: left;
    .menu-title{
      .component{
        margin-left: 20px;
        li{
          padding: 10px 0;
        }
        span{
          color: @gray;
        }
        a{
          color: @menuText;
          cursor: pointer;
          text-decoration: none;
        }
        a:hover{
          color: @mainColor;
        }
        a.active{
          color: @mainColor;
        }
      }
    }
  }
</style>
