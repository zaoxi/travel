<template>
  <div class="main-Wrapper">
    <city-header ></city-header>
    <city-search :cities="data.cities"></city-search>
    <city-list :lists="data" :letter="letter"></city-list>
    <city-alphabet
      :alphadet="data.cities"
       @change="handleClickLetter"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/Seacrh'
import CityList from './components/list.vue'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  data () {
    return {
      data: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CityList,
    CityAlphabet,
    CitySearch
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(
        res => {
          if (res.data.ret && res.data.data) {
            this.data = res.data.data
          }
        }
      )
    },
    handleClickLetter (letter) {
      this.letter = letter
    }
  }

}
</script>

<style lang="stylus" scoped>
.main-Wrapper
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  overflow hidden
</style>
