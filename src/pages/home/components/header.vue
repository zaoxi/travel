<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont">&#xe667;</span>
  </div>
  <div class="header-input">
     <span class="iconfont">&#xe628;输入游玩城市/景点/主题</span>
  </div>
  <div class="header-right ">
    <span>城市
    </span><span class="iconfont city-icon">&#xe64a;</span>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.header
  display:flex
  text-align center
  height 0.86rem
  width 100%
  line-height 0.86rem
  background #39afbb
  color white
  .header-left
    float left
    padding-left 0.1rem
  .header-input
    flex 1
    margin auto 0.1rem
    width 100%
    height 0.55rem
    line-height 0.55rem
    border-radius 0.32rem
    background white
    color #d0d0d0
  .header-right
    float right
    padding-right 0.1rem
    .city-icon
      font-size 0.20rem

</style>
