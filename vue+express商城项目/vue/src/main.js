import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from  'vue-infinite-scroll'
import {currency} from './util/currency'
import Vuex from 'vuex'

import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'
/* eslint-disable no-new */
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad, {
  loading: 'static/loading-svg/loading-bars.svg',
  try: 3
})
Vue.use(Vuex)
Vue.filter("currency",currency)
// vuex
const store = new Vuex.Store({
  state: {
    userName:'',
    cartCount:0
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, userName) {
      state.userName = userName
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount
    },
    getCartCount(state,cartCount){
      state.cartCount = cartCount
    }
  }
})
new Vue({
  // 你好啊
  el: '#app',
  router,
  store,
  render: function (h) {
    return h(App)
  }
})
