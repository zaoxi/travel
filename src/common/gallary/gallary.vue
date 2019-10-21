<template>
  <div class="container"
  @click="handleClickGallary"
  >
    <div class="wrapper">
      <div class="img">
         <swiper :options="swiperOption">
          <swiper-slide v-for="(item ,index) in img" :key="index" >
            <img :src="item" alt="作品">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    img: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
          'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClickGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container>>>.swiper-container
  overflow inherit
.container
  z-index 100
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  height 100%
  background #000
  display flex
  align-items center
  .wrapper
    overflow hidden
    display flex
    height 0
    width 100%
    padding-bottom 100%
    background white
    .img img
      color #ffffff
      width 100%
    .swiper-pagination
      position fixed
      color white
      bottom 15%

</style>
