<template>
    <div>
      <home-header></home-header>
      <Home-Sliser :lists="swiperList"></Home-Sliser>
      <home-icon :lists="iconList"></home-icon>
      <home-recommend :lists="recommendList"></home-recommend>
      <home-weekend :lists="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSliser from './components/Slider'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []

    }
  },
  components: {
    HomeHeader,
    HomeSliser,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json').then(
        res => {
          res = res.data
          if (res.data && res.ret) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        }
      )
    }
  },
  mounted () {
    this.getHomeInfo()
  }

}
</script>

<style scoped>

</style>
