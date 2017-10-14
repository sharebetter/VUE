<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
      	<li class="menu-item" v-for='item in datas.goods'>
      	  <span class="text">
      	    <span class="iconMap" v-show='item.type>0' :class="icon[item.type]"></span>
      	    {{item.name}}
      	  </span>
      	 </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWarpper">
      <ul>
      	<li v-for='item in datas.goods' class="food-list food-list-hook">
      	  <h1 class="title"> {{item.name}}</h1>
      	  <ul>
            <li v-for='food in item.foods' class="food-item">
              <div class="icon">
                <img :src="food.icon" alt="" height="57" width="57"/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="description">{{food.description}}</p>
                <div class="sell-info">
                  <span class="sellCount">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}</span>
                  <div class="price">
                    <span class="newPrice">${{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
                </div>
              </div>
            </li>
         </ul>
      	</li>
      </ul>
    </div>
    <shopcart :food="food" :deliveryPrice='datas.seller.deliveryPrice' :minPrice='datas.seller.minPrice'></shopcart>
    <!--<div class="detailWrapper"></div>-->
   <!-- {{datas.goods}}-->
  </div>
</template>

<script>
  import icon from './mods/icon'
  import Scroll from 'better-scroll'
  import shopcart from './mods/shopcart.vue'
  import cartcontrol from './mods/cartcontrol.vue'
  export default {
    props: ['datas'],
    data () {
      return {
        icon: icon,
        goods: this.datas.goods
      }
    },
    computed: {
      food () {
        let arr = []
        //                 回调里的参数 1.value 2.index
        this.datas.goods.forEach(goods => {
          goods.foods.forEach(foods => {
            if (foods.count > 0) {
              arr.push(foods)
            }
          })
        })
        return arr
      }
    },
    mounted () {
      this.$nextTick(() => {
        // dom更新完之后 === window.onload
        // dom更新完  => new Scroll() =>  ajax获取到了数据=>dom
      })
    },
    methods: {
      scroll () {
        /* eslint-disable no-new */
        new Scroll(this.$refs['foodsWarpper'], {
          click: true
        })
        new Scroll(this.$refs['menuWrapper'], {
          click: true
        })
      }
    },
    components: {
      shopcart,
      cartcontrol
    }
  }
</script>

<style>
</style>
