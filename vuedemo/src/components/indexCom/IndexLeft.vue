<template>
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{ product.title}}</h3>
          <img :src="productIcon" v-if="product.showImg">
          <ul class="itemClass">
             <router-link v-for="(item,index) in product.list" :to="{ path: item.path }" :class="{'active':$route.path==item.path}" tag="li">
              {{ item.name }}
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </router-link>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news itemClass">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      newsList: [],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
               {
                  name: '数据统计',
                  path: '/index/count',
                  icon: require('../../assets/images/1.png'),
                  active:false
                },
                 {
                  name: '流量分析',
                  path: '/index/analysis',
                  active:false,
                  hot: true
                },
                {
                  name: '数据预测',
                  path: '/index/forecast',
                  active:false
                },
                {
                  name: '广告发布',
                  path: '/index/publish',
                  active:false
                }
          ],
          showImg:true
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      imgMap: {
        '/index/count': require("../../assets/images/1.png"),
        '/index/forecast': require("../../assets/images/2.png"),
        '/index/analysis': require("../../assets/images/3.png"),
        '/index/publish': require("../../assets/images/4.png")
      }
    }
  },
  computed: {
    productIcon () {
      // console.log(this.imgMap[this.$route.path])
      return this.imgMap[this.$route.path]
    }
  },
  created () {
    axios.get('/static/data/db.json').then((result)=>{
      let res = result.data
      if(res){
         this.newsList = res.getNewsList
      }
    },(err)=>{
      console.log('获取失败：'+err)
    })
  }
}
</script>

<style>

</style>
