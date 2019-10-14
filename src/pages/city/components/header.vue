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

</style>
