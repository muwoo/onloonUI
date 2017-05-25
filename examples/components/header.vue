<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <img class="logo-img" src="../assets/logo.png">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script><style lang="less" rel="stylesheet/less">
  @import "../style/index";
  .header{
    width: 100%;
    height: 80px;
    background: @mainColor;
    .container{
      display: table;
      width: 1200px;
      margin: 0 auto;
      height: 80px;
      .logo{
        display: table-cell;
        vertical-align: middle;
      }
      .logo-img{
        width: 150px;
      }
    }
  }
</style>

