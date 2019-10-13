<template>
  <div >
    <div class="top">
      <router-link to="/">
        <div class="top-left">
            <span class="iconfont">&#xe667;</span>
        </div>
      </router-link>
      <div class="top-center">城市选择</div>
    </div>
    <div class="search">
      <input type="search" name="city" placeholder="请输入城市">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.top
  height 0.86rem
  line-height 0.86rem
  background #39afbb
  .top-center
    font-size 0.32rem
    color #ffffff
    text-align center
  .top-left
    float left
    color #ffffff
    font-size 0.32rem
    padding-left 0.1rem
.search
  position relative
  height 0.86rem
  line-height 0.86rem
  background #39afbb
  input
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    width 80%
    padding 0 0.1rem
    height 0.66rem
    border-radius 0.33rem
    text-align center
    color #666
</style>
