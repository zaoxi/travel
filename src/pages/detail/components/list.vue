<template>
  <div>
    <div>
      <div class="list" v-for="(item,index) of list" :key="index">
        <div class="list-item-title">😘&nbsp;{{item.title}}</div>
        <div v-if="item.children" class="list-item-children">
          <detail-List :list="item.children"></detail-List>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: {
      type: Array,
      default () {
        return [
          {
            title: '成人票',
            children: [{
              title: '成人联票1'
            }, {
              title: '成人联票2',
              children: [{title: '成人特殊票'}]
            }]
          },
          {title: '儿童票'},
          {title: '学生票'}
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list-item-title
    height 0.64rem
    line-height 0.64rem
    text-indent 0.32rem
    font-size 0.32rem
  .list-item-children
    margin-left 0.32rem
  .scroll
    width 100%
    height 300%
</style>
