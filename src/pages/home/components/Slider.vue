<template>
<div class="wraper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide  v-for="item of lists" :key="item.id">
      <img :src="item.imgUrl" class="slider-img">
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
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
        loop: true,
        autoplay: 4000,
        pagination: '.swiper-pagination'

      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wraper>>>.swiper-pagination-bullet-active
  background-color #f9f9f9 !important
.wraper
  width 100%
  height 3rem
  overflow hidden
  .slider-img
    width 100%
    height 3rem

</style>
