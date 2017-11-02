import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Home from  './components/Home'
import Search from  './components/Search'
Vue.use(VueRouter)
const routes =[{
    path:'/',
    component: Home
},{
    path:'/home',
    component: Home
},{
    path:'/search',
    component: Search
}]
const router = new VueRouter({
    routes
})
new Vue({
    router,
    ...App
}).$mount('#app')
