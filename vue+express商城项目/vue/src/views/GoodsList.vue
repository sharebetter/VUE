<template>
    <div>
      <vheader></vheader>
      <vbrander><span>Goods</span></vbrander>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">排序:</span>
            <a href="javascript:void(0)" class="default cur">默认</a>
            <a href="javascript:void(0)" class="price" @click="sortChange">价格 <span v-if="!upDown">↑</span><span v-else>↓</span></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="openPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>价格:</dt>
                <dd><a href="javascript:void(0)" @click="setPriceLight('all')" :class="{'cur':checkSelect == 'all'}">All</a></dd>
                <dd v-for="(price,index) in goodsFilterPrice">
                  <a href="javascript:void(0)" @click="setPriceLight(index)" :class="{'cur':checkSelect == index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>                
              </dl>
            </div>
            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList">
                    <div class="pic">
                      <a href="#"><img :src="'static/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">价格：{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>                  
                </ul>
              </div>
              <div class="view-more-normal" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                <img src="./../assets/loading-spinning-bubbles.svg" v-show="loadShow">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<modal :mdShow="mdShow">将mdShow的值附在mdShow上传给子组件-->      
      <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
      <!--<modal v-bind:mdShow="mdShow" @close="closeModal">用@也可以绑定close事件 --> 
          <p slot="message">
                                 请先登录,否则无法加入到购物车中!
          </p>
          <div slot="btnGroup">
              <a class="btn btn--m" href="javascript:;" @click="mdShow = false">关闭</a>
          </div>
      </modal>
      <!--加成功模态框-->
       <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
        </div>
      </modal>
      
      <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
     <vfooter></vfooter>
    </div>
</template>
<script>
import vheader from '@/components/header.vue'
import vfooter from '@/components/footer.vue'
import vbrander from '@/components/brander.vue'
import modal from '@/components/modal.vue'
import axios from 'axios'
export default{
  data () {
    return {
      goodsList: [],
      goodsFilterPrice: [
        {
          startPrice: 0,
          endPrice: 100
        },
        {
          startPrice: 100,
          endPrice: 500
        },
        {
          startPrice: 500,
          endPrice: 1000
        },
        {
          startPrice: 1000,
          endPrice: 2000
        }
      ],
      checkSelect: 'all',
      filterBy: false,
      overLayFlag: false,
      sort: true,
      pageSize: 8,
      page: 1,
      busy: true,
      loadShow: false,
      priceRander: '',
      mdShow:false,
      mdShowCart:false,
      upDown:false
    }
  },
  mounted () {
    this.getGoodsList()
  },
  computed: {
  	userName () {
  	   return this.$store.state.userName
    }
  },
  components: {
    vheader,
    vfooter,
    vbrander,
    modal
  },
  methods: {
    getGoodsList (flag) {
      var param = {
      	sort: this.sort?1:-1,
      	page: this.page,
      	priceLevel: this.priceRander
      }
//    console.log(param)
      axios.get('/goods/index',{
      	params: param
      }).then(res => {
      	// console.log(res)
      	if(res.data.result.list.length <= 0){
      		this.busy = true
        	this.loadShow = false        	        	
        }else{
        	if(flag){
	          this.goodsList = this.goodsList.concat(res.data.result.list)
	          this.loadShow = false
	          this.busy = false
	        }else{
	          this.goodsList = res.data.result.list
	          this.loadShow = false	          
	          this.busy = false
	        }     
        }          
        // console.log(this.goodsList)
      })
    },
    setPriceLight (index) {
      // console.log(index)
      this.checkSelect = index
      this.page = 1
      if(this.checkSelect =='all'){
      	this.priceRander = ''
      }else{
        this.priceRander = this.goodsFilterPrice[index]      	
      }
      this.getGoodsList(false)
    },
    openPop () {
      // console.log(233)
      this.filterBy = true
      this.overLayFlag = true
    },
    closePop () {
      this.filterBy = false
      this.overLayFlag = false
    },
    sortChange () {
      this.sort = !this.sort
      this.page = 1
      // console.log(this.sort)
      this.upDown = !this.upDown
      this.getGoodsList() 
    },
    loadMore () {
        this.busy = true
        setTimeout(() => {
          this.page++
          this.getGoodsList(true)
          this.loadShow = true
        }, 500)
    },
    addCart (productId) {
    	axios.post('/goods/addCart', {
          productId: productId
    	}).then((res) => {
    		if(res.data.status==0){
    			this.mdShowCart = true
    			this.$store.commit("updateCartCount",1)
    		}else if(res.data.status==101){
    			this.mdShow = true
    		}
    		else{
    			alert("加入购物车失败")
    		}
    	})
    },
    closeModal () {
      this.mdShow = false
      this.mdShowCart = false
    }
  }
}
</script>
