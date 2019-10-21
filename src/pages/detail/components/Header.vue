<template>
  <div class="header-top" ref="header">
    <router-link tag="div" to="/" class="back">
        <span class="iconfont">&#xe667;</span>
    </router-link>
    <div class="header-fixed" v-show="showHeaderTop" :style="{opacity:opacity}">
      城市详情
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showHeaderTop: false,
      opacity: ''
    }
  },
  methods: {
    showHeaderBind () {
      window.addEventListener('scroll', this.showHeader)
    },
    showHeader () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        this.showHeaderTop = true
        this.opacity = top / 120
      } else {
        this.showHeaderTop = false
      }
    }
  },
  mounted () {
    this.showHeaderBind()
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.showHeader)
  }

}
</script>

<style lang="stylus" scoped>
.back
  position: absolute
  top 0.2rem
  bottom 0
  left 0.32rem
  width 0.64rem
  height 0.64rem
  line-height 0.64rem
  border-radius 50%
  background-color rgba(0,0,0,0.1)
  z-index 2
  text-align center
  .iconfont
    color white
    font-size 0.32rem
.header-fixed
  position: fixed
  top 0
  left 0rem
  right 0
  z-index 3
  height 0.86rem
  line-height 0.86rem
  background #39afbb
  font-size 0.32rem
  color #ffffff
  text-align center

</style>
