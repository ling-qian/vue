import Vue from 'vue'
import Router from 'vue-router'
import MyCollect from '@/pages/MyCollect'
import RankList from '@/pages/RankList'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my-collect',
      component: MyCollect
    },
    {
      path: '/rank-list',
      name: 'rank-list',
      component: RankList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
