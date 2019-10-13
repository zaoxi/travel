<template>
  <div>
    <city-header ></city-header>
    <city-list :lists="data" :letter="letter"></city-list>
    <city-alphabet
      :alphadet="data.cities"
       @change="handleClickLetter"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
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
    CityAlphabet
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

<style scoped>

</style>
