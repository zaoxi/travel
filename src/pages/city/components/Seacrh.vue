<template>
<div>
  <div class="search">
    <input type="input" name="city" placeholder="输入城市名称/拼音"
    v-model="keywords"
    >
  </div >
  <div class="search-content" ref="content"
       v-show="keywords">
    <div class="city-list">
      <div class="city-list-item"
           v-for="item of list"
           :key="item.id"
      >{{item}}</div>
      <div class="city-list-item"
      v-show="!list.length"
      >没有找到匹配数据</div>

    </div>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Seacrh',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      timer: null,
      list: []
    }
  },
  watch: {
    keywords () {
      if (this.timer) { clearInterval(this.timer) }
      if (!this.keywords) {
        this.list = []
        return
      }
      this.timer = setInterval(() => {
        let result = []
        for (let key in this.cities) {
          this.cities[key].forEach((value) => {
            if (value.spell.indexOf(this.keywords) > -1 ||
              value.name.indexOf(this.keywords) > -1
            ) {
              result.push(value.name)
            }
          })
        }
        this.list = result
      }, 15)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.content)
  }
}
</script>

<style lang="stylus" scoped>
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
  .search-content
    overflow hidden
    z-index 2
    position absolute
    top 1.72rem
    left 0
    right 0
    bottom 0
    background-color #fff
  .city-list
    width 100%
    .city-list-item
      padding 0.1rem 0
      border-bottom  0.02rem solid #eee
      text-indent 0.32rem

</style>
