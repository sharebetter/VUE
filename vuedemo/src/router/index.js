import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
import IndexRight from '@/components/indexCom/IndexRight.vue'
import Analysis from '@/components/itemList/analysis.vue'
import Count from '@/components/itemList/count.vue'
import Forecast from '@/components/itemList/forecast.vue'
import Publish from '@/components/itemList/publish.vue'
import OrderList from '../view/orderList.vue';
Vue.use(Router)

export default new Router({
// mode : 'history',
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      component: Index,
      children : [
        {
          path:'',
          component: IndexRight
        },
        {
          path:'count',
          component: Count
        },
        {
          path:'forecast',
          component: Forecast
        },
        {
          path:'publish',
          component: Publish
        },
        {
          path:'analysis',
          component: Analysis
        }
      ]
    },
    {
      path:'/orderList',
      component:OrderList
    }
  ]
})
