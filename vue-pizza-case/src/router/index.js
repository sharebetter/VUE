import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Menu from '@/pages/Menu'
import Admin from '@/pages/Admin'
import About from '@/pages/about/About'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 二级路由
import Contact from '@/pages/about/Contact'
import Delivery from '@/pages/about/Delivery'
import History from '@/pages/about/History'
import OrderingGuide from '@/pages/about/OrderingGuide'

// 三级路由
import Phone from '@/pages/about/contact/Phone';
import PersonName from '@/pages/about/contact/PersonName';

Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path:'/',
      name:'homeLink',
      components:{
        default:Home,
      }
    },
    {
      path:'/menu',name:'menuLink',component:Menu
    },
    {
      path:'/admin',name:'adminLink',component:Admin
    },
    {
      path:'/about',name:'aboutLink',component:About,
      // redirect: '/about/Contact',  //设置默认子路由
      redirect: '/personname',  //设置默认子路由
      children:[
        {
          path:'/about/contact',
          name:'contactLink',
          component: Contact,
          children:[
            {path:'/phone',name:"phoneNumber",component:Phone},
            {path:'/personname',name:"personName",component:PersonName}
          ]
        },
        {
          path:'/about/delivery',
          name:'deliveryLink',
          component: Delivery
        },
        {
          path:'/about/History',
          name:'historyLink',
          component: History
        },
        {
          path:'/about/orderingGuide',
          name:'orderingGuideLink',
          component: OrderingGuide
        },
      ]
    },
    {
      path:'/login',name:'loginLink',component:Login
    },
    {
      path:'/register',name:'registLink',component:Register
    },
    {path:'*',redirect:'/'}
  ],
  mode:'history',
  //设置滚动记忆
  scrollBehavior(to,from,savedPosition){
    // return { x:0, y:100 }
    // return { selector: '.btn'}

    if(savedPosition){
      return savedPosition
    }else{
      return { x:0, y:0 }
    }
  }
})

export default router