<template>
<div class="list"  ref="list">
  <div class="content">
    <div class="area ">
          <div class="title border-topbottom " >当前城市</div>
          <div class="button-list">
            <div class="button">{{this.$store.state.city}}</div>
            <div class="clear"></div>
          </div>
    </div>
    <div class="area ">
      <div class="title border-topbottom " >热门城市</div>
      <div class="button-list">
        <div class="button"
             v-for="item of lists.hotCities" :key="item.id"
             @click="handleCityClick(item.name)"
        >{{item.name}}</div>
      </div>
    </div>

    <div class="area "
         v-for="(items,key) of lists.cities"
         :key="key"
         :ref="key"
         >
      <div class="title border-topbottom "
      >{{key}}
      </div>
      <div class="city-list">
        <div class="city-list-item"
             v-for="item of items"
             :key="item.id"
             @click="handleCityClick(item.name)"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    lists: {},
    letter: String
  },
  data () {
    return {

    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }

  }
}
</script>

<style lang="stylus" scoped>
.list
  overflow hidden
  position absolute
  top 1.72rem
  left 0
  right 0
  bottom 0

  .border-topbottom:before,.border-topbottom:after
    border-color #ccc
  .title
    height 0.5rem
    line-height 0.5rem
    background-color #eee
    color #666
    text-indent 0.32rem
  .button-list
    width 95%
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content  flex-start
    padding 0.1rem 0
    .button
      box-sizing border-box
      width 30%
      margin 0.1rem  0.1rem
      padding 0.1rem 0
      text-align center
      border 0.02rem solid #eee
      border-radius 0.04rem
  .city-list
    width 100%
    .city-list-item
      padding 0.1rem 0
      border-bottom  0.02rem solid #eee
      text-indent 0.32rem
      height 0.6rem
      line-height 0.6rem

</style>
