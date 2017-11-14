<template>
  <div class="container">
    <!-- 左边菜单栏 -->
    <div class="sidebar"></div>
    <!-- 中间主显示框 -->
    <div class="home">
      <transition name="display" node="out-in">
        <!--用于展示Home.vue部分的内容 -->
        <router-view></router-view>
      </transition>
    </div>
    <!-- 右侧登录/注册栏，这个articleFlag参数表示，如果是在文章显示的页面，则会删除掉右边的登录/注册部分 -->
    <div class="rightbar" v-if="aeticleFlag">
      <nav>
        <ul class="nav-ul">
          <li @click="changeLoginway('login')">
            <router-link to="/login">
              <i class="fa fa-sign-in"></i>
              登录
            </router-link>
          </li>
          <li @click="changeLoginway('register')">
            <router-link to="/login">
              <i class="fa fa-user"></i>
              注册
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  //在vuex2.0中提供mapGetters用于获取getters中的内容，接收一个key: value类型的对象
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        show: 'home'
      }
    },
    //mapGetters接收的参数表示，页面上定义的变量articleFlag通过getters的getArticleFlag方法来获取
    computed: mapGetters({
      articleFlag: 'getArticleFlag'
    }),
    methods: {
      //每个组件可以通过this.$store获取vuex的store，然后可以通过dispatch方法来触发一个action，
      //在action中接收一个loginway参数
      changeLoginway (loginway){
        this.$store.dispatch('changeLoginway', loginway)
      }
    }
  }
</script>

<style>
  .display-enter-active,
  .display-leave-active {
    transition: opacity 0.5s ease;
  }
  .display-enter, .display-leave-active {
    opacity: 0;
  }
  .container-main{
    height: 100%;
  }
  .dropdown .active{
    background-color: #e78170;
  }
  .dropdown .active a{
    color: #ffffff;
  }
  .dropdown .indent a{
    padding-left: 13px;
  }
  .nav-ul{
    display: flex;
  }
  .nav-ul li:first-child {
    margin-right: 5px;
  }
  .sidebar .fa {
    font-size: 20px;
  }
  .sidebar .fa-mobile {
    font-size: 30px;
  }
  .navbar-user .avatar{
    position: relative;
    float: right;
    width: 38px;
    height: 38px;
    display: inline-block;
    padding-right: 10px;
    margin-top: 5px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
  }
  .avatar{
    border-radius: 50%;
  }
  .avatar img{
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 50%;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1300px){
    .home{
      margin-left: 40px;
    }
    .nav-user li{
      width: 40px;
      height: 30px;
      overflow: hidden;
    }
    .sidebar{
      transition: all 0.5s;
      width: 40px;
      overflow: hidden;
    }
    .sidebar li a{
      padding: 0 auto;
      margin:0 auto;
    }
    .sidebar i{
      font-size: 30px;
    }
    .sidebar .fa{
      margin-right: 15px;
      font-size: 20px;
    }
    .sidebar .fa-mobile{
      margin-left: 4px;
      margin-right: 15px;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1100px){
    .home{
      margin-right: 0;
    }
  }
</style>
