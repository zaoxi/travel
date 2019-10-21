<template>
<div>
  <DetailHeader></DetailHeader>
  <DetailBanner></DetailBanner>
  <DetailList></DetailList>
  <div class="scroll"></div>
  <div class="scroll">滚动</div>
  <div class="scroll">滚动</div>

</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.getCityinfoSucc)
    },
    getCityinfoSucc (res) {
      if (res.data.ret && res.data.data) {

      }
    }
  }
}
</script>

<style scoped>
.scroll{
  height: 200px;
}
</style>
