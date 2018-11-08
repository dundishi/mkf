// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import store from './router/store'

Vue.prototype.axios = axios
Vue.prototype.qs = qs

axios.defaults.withCredentials = true;

Vue.config.productionTip = false

import 'mint-ui/lib/style.css'
import './common/css/mui.css'
import './common/css/icons-extra.css'


import {Header,Button,Swipe,SwipeItem} from 'mint-ui';

Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//定义全局(日期格式)过滤器
//dateFormat 过滤器名字  
//datestr  用户日期
//pattern="YYYY-MM-DD"  指定日期格式
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
  return new Date(datestr).toLocaleString();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
