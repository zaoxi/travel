<template>
  <div>
    <ul class="wrapper">
      <li class="item" v-for="(item,key) of alphadet"
          :key="key"
      @click="handleClickAphabet"
      >{{key}}</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    alphadet: Object
  },
  methods: {
    handleClickAphabet (e) {
      this.$emit('change', e.target.innerHTML)
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
