import Vue from 'vue'

import App from './App.vue'
import router from './router/index.js'
import {store} from './store/store.js'


const Vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 全局守卫
router.beforeEach((to,from,next) =>{
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else {
    if (Vm.$store.getters.isLogin){
      next();
    }else{
      alert("还没有登录,请先登录!");
      next('/login');
    }
  }
})
