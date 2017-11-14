import Vue from 'vue'
import Vuex from 'vuex'

//引入getters与actions
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

//注册vuex
Vue.use(Vuex)
//定义各组件需要进行通信的数据
const state = {
  show: 'hot',
  loginway: 'login',
  hotArticles: [{
    author: '小熊猫',
    title: '每天努力多一点点',
    time: '大约6小时前',
    read: '7231',
    comment: "247",
    like: '2341',
    pay: '2',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  },{
    author: '大熊猫',
    title: '每天前进一点点',
    time: '大约6小时前',
    read: '7231',
    comment: '247',
    like: '2341',
    pay: '2',
    src: 'url(../../static/images/vue-demo-hot.jpg)'
  }]
}
//导出vuex的实例，其中包含state，mutations，getters，actions
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
