<template>
    <div>
      <vheader></vheader>
      <div class="container">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>订单状态</span></h2>
        </div>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur">选择</span>收货地址</li>
            <li class="cur"><span>查看</span>订单</li>
            <li class="cur"><span>订单</span>支付</li>
            <li class="cur"><span>订单</span>信息</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>恭喜! <br>您已成功下单</h3>
            <p>
              <span>订单号：{{orderId}}</span>
              <span>订单金额：{{totalMoney}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link class="btn btn--m" to="/cart">返回购物车</router-link>
              </div>
              <div class="btn-r-wrap" >
                <router-link class="btn btn--m" to="/">返回商城</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        data(){
            return{
               orderId: '',
               totalMoney: 0
            }
        },
        components: {
          vheader,
      	  vfooter,
      	  vbrander,
      	  modal
        },
        mounted () {
          this.getOrderInfo()
        },
        methods: {
          getOrderInfo () {
        	let orderId = this.$route.query.orderId
            // console.log("orderId:"+orderId);
            if(!orderId){
              return;
            }
            axios.get("/users/orderDetail",{
                params:{
                  orderId: orderId
                }
            }).then((response)=>{
                let res = response.data;
                if(res.status=='0'){
                    this.orderId = orderId
                    this.totalMoney = res.result.totalMoney
                }
            });  	
          }
        }
    }
</script>
