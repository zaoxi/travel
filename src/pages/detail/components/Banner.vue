<template>
<div>
  <div class="banner"
  @click="handleClickgallaryShow"
  >
    <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
    <div class="img-info">
        <div class="img-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="img-number"><i class="iconfont">&#xe60e;</i>数字</div>
    </div>
  </div>
  <common-gallary v-show="gallaryShow"
  @close="handleCloseGallary"
  ></common-gallary>
</div>
</template>

<script>
import commonGallary from 'common/gallary/gallary'
export default {
  name: 'Banner',
  data () {
    return {
      gallaryShow: false
    }
  },
  components: {
    commonGallary
  },
  methods: {
    handleClickgallaryShow () {
      this.gallaryShow = !this.gallaryShow
    },
    handleCloseGallary () {
      this.gallaryShow = !this.gallaryShow
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 54.83%
  background-color #666
  img
    width 100%
  .img-info
    position absolute
    left 0
    right 0
    bottom 0
    display flex
    align-items center
    height 0.54rem
    line-height 0.54rem
    color white
    background-image linear-gradient(top ,rgba(0,0,0,0),rgba(0,0,0,0.8))
    .img-title
      flex 1
      text-indent 0.32rem
    .img-number
      height 0.34rem
      line-height 0.34rem
      padding 0 0.24rem
      background-color rgba(158, 158, 158, 0.6)
      border-radius 0.32rem
      font-size 0.20rem
      .iconfont
        font-size 0.20rem
        padding-right 0.04rem
</style>
