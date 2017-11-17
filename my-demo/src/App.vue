<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <personal-info></personal-info>
  </div>
</template>

<script>
  import MHeader from './components/MHeader'
  import MFooter from './components/MFooter'
  import PersonalInfo from './pages/PersonalInfo'
export default {
  name: 'app',
  components: {
    MHeader,
    PersonalInfo,
    MFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
