<template>
<div>
  <div class="recommend-title">热门推荐</div>
  <ul>
    <li class="item" v-for="item of lists" :key="item.id">
      <img :src="item.imgUrl" class="item-img">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Reconmend',
  props: {
    lists: Array
  }
}
</script>

<style lang="stylus" scoped>
.recommend-title
  width 100%
  height 0.8rem
  text-indent 0.2rem
  line-height 0.8rem
  background #f9f9f9
.item
  display flex
  overflow hidden
  height 0
  width 100%
  padding-bottom 1.8rem
  .item-img
    width 1.6rem
    height 1.6rem
    padding 0.1 rem
  .item-info
    padding 0.1rem
    flex 1
    min-width 0
    .item-title
      line-height 0.53rem
      font-size 0.32rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-desc
      font-size 0.32rem
      line-height 0.57rem
      color #ccc
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .item-button
      padding 0 .2rem
      line-height 0.4rem
      font-size 0.24rem
      border-radius 0.06rem
      color   #fff
      background #ff9300

</style>
