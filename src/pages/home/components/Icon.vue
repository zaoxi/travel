<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon-item" v-for="item of page" :key="item.id">
        <img :src="item.imgUrl" class="icon-img">
        <p class="icon-desc">{{item.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  props: {
    lists: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.lists.forEach(
        (item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        }
      )
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons
  width 100%
  margin-top 0.2rem
  .icon-item
    float left
    box-sizing border-box
    height 0
    width 25%
    padding-bottom 25%
    overflow hidden
    margin:0.1rem 0
    .icon-img
      width 70%
      padding 0 15%
    .icon-desc
      padding-top 0.1rem
      line-height 0.32rem
      text-align center
</style>
