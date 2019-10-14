<template>
  <div>
    <ul class="wrapper">
      <li class="item" v-for="item of letters"
          :key="item"
          @click="handleClickAphabet"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEend"
          :ref="item"
      >{{item}}</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    alphadet: Object
  },
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let item in this.alphadet) {
        letters.push(item)
      }
      return letters
    }
  },
  methods: {
    handleClickAphabet (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) { clearInterval(this.timer) }
      this.timer = setInterval(() => {
        if (this.touchStatus) {
          console.log('move')
          const startY = this.$refs['A'][0].offsetTop
          const moveY = e.touches[0].clientY
          let index = Math.floor((moveY - startY - 76) / 20)
          if (index > -1 && index < this.letters.length) { this.$emit('change', this.letters[index]) }
        }
      }, 12)
    },
    handleTouchEend () {
      this.touchStatus = false
    }

  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  display flex
  flex-direction column
  justify-content  center
  width 5%
  position absolute
  top 1.72rem
  right 0
  bottom 0
  color #39afbb
  .item
    text-align center
    line-height .4rem
</style>
