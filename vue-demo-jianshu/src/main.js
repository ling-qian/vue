// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from '../vuex/store'
import App from './App'
import ArticleList from './components/ArticleList.vue'
import Bonus from './components/Bonus.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Special from './components/Special.vue'
import Download from './components/SpecialList.vue'
import Article from './components/Article.vue'
import WriteArticle from './components/ArticleList.vue'

import VueQuillEditor from 'vue-quill-editor'

Vue.use(VueRouter) //注册vue-router
Vue.use(VueResource)
Vue.use(VueQuillEditor)

//配置路由，部分代码，不同于vue-router1.0，vue-router2.0利用routes参数进行路由配置，
//接收path和component属性组成的对象，子路由采用children参数
const router = new VueRouter({
  routes: {
    path: '/home',
    component: Home,
    children: [{
      path:'article/:type',
      component: ArticleList
    },{
      path: '/topic',
      component: Special,
      children: [{
        path: 'topic_article/:type',
        component: SpecialList
      }]
    },{
      path: '/bonus',
      component: Login
    },
      {
        path: '/download',
        component: Download
      },
      {
        path: '/write',
        component:WriteArticle
      },{
        path: '/*',
        redirect: '/home/article/hot'
      }]
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app', //vue实例的根元素
  router, //在vue实例中,引入定义的路由
  store, //在vue实例中,引入vuex的store
  render: h => h(App) //渲染App组件
})
