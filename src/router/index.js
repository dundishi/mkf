import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//自定义组件
import HomeContainer from '../components/tabber/HomeContainer'
import NewsContainer from '../components/tabber/NewsContainer'
import ShopcartContainer from '../components/tabber/ShopcartContainer'
import ContantContainer from '../components/tabber/ContantContainer'
import NewsDetailContainer from '../components/news/NewsDetailContainer' 
import GoodList from '../components/goods/GoodList' 
import GoodInfo from '../components/goods/GoodInfo' 
import SearchContainer from '../components/search/SearchContainer' 
import Login from '../components/tabber/login' 


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: "/home"},
    {path:'/home',component:HomeContainer},
    {path:'/home/goodlist',component:GoodList},
    {path:'/home/goodinfo/:id',component:GoodInfo},
    {path:'/home/srarch',component:SearchContainer},
    {path:'/news',component:NewsContainer},
    {path:'/shopcart',component:ShopcartContainer},
    {path:'/contact',component:ContantContainer},
    {path:'/newsdetail/:id',component:NewsDetailContainer},
    {path:'/login',component:Login}
  ],linkActiveClass:"mui-active"
})
