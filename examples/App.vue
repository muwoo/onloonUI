<template>
  <div id="app">
    <OHeader></OHeader>
    <div class="container">
      <leftMenu></leftMenu>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import OHeader from './components/header.vue'
import leftMenu from './components/left-menu.vue'
export default {
  name: 'app',
  components: {
    OHeader,
    leftMenu
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  body{
    margin: 0;
    padding: 0;
    .container{
      width: 1200px;
      margin: 100px auto;
    }
    .view{
      width: 960px;
      padding: 20px;
      float: right;
    }
  }
</style>
