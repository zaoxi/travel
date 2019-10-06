<template>
    <div>
      <home-header></home-header>
      <Home-Sliser></Home-Sliser>
      <div>123</div>
    </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSliser from './components/slider'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSliser
  }
}
</script>

<style scoped>

</style>
