<template>
  <div>
    <div class="weekend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of lists" :key="item.id">
        <div class="item-img-wrap">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
  .weekend-title
    width 100%
    height 0.8rem
    text-indent 0.2rem
    line-height 0.8rem
    background #f9f9f9
  .item-img-wrap
    width 100%
    overflow hidden
    height 0
    padding-bottom  37.1%
    .item-img
      width 100%
  .item-info
    margin 0.1rem  0.1rem
    .item-title
      line-height 0.53rem
      font-size 0.32rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-desc
      line-height 0.3rem
      color #ccc
      overflow hidden
      text-overflow ellipsis
      white-space nowrap

</style>
