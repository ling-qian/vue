<template>
  <div class="header">
    <div class="header-left">
      <i class="fa fa-user fa-3x" @click="showMenu"></i>
    </div>
    <div class="header-center">
      <router-link to="/"><i class="fa fa-heart fa-3x"></i></router-link>
      <router-link to="/rank-list"><i class="fa fa-music fa-3x"></i></router-link>
      <router-link to="/search"><i class="fa fa-search fa-3x"></i></router-link>
    </div>
  </div>
</template>
<script>
  export default ({
    computed:{
      isMenuShow(){
        return this.$store.state.personal.isMenuShow
      }
    },
    methods: {
      showMenu(){
        this.$store.commit('showMenu')
      }
    }
  })
</script>
<style scoped>
  .header{
    background-color: skyblue;
    margin: 0 auto;
    vertical-align: center;
    height: 100px;
    position:relative;
  }
  .header-left{
    float: left;
    margin-left: 15px;
    margin-top: 25px;
  }
  .header-right{
    float:right;
    margin-right: 15px;
    margin-top: 25px;
  }
  .header-center{
    margin-top: 25px;
    display: inline-block;
    text-align: center;
  }
  .header-center i{
    margin-left: 25px;
    margin-right: 25px;
  }
  .active{
    background-color: rebeccapurple;
  }
</style>
