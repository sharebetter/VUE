<template>
  <div>
    <div class="col-sm-12">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button class="btn btn-sm btn-outline-success" @click="addCart(item,option)">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="myCart.length > 0">
            <tr v-for="item in myCart" :key='item.index' >
              <td>
                <button class="btn btn-sm" @click="changeNum(item.name,'reduce')">-</button>
                <span>{{item.num}}</span>
                <button class="btn btn-sm" @click="changeNum(item.name,'add')">+</button>
              </td>
              <td>{{item.name}}</td>
              <td>{{item.price * item.num}}</td>
              <td @click="remove(item.name)"><a class="btn btn-danger">删除</a></td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td><h2>空空如也！</h2></td>
            </tr>
          </template>
        </tbody>
      </table>
      <p>总价: {{priceSum}}</p>
      <button class="btn btn-success btn-block">提交</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default{
    data(){
      return{
        getMenuItems:[],
        myCart:[],
      }
    },
    mounted() {
      axios.get('https://easy-mock.com/mock/5c0dda89b37d3f15023ab4cf/shop/pizza').then(res=>{
         this.getMenuItems = res.data.result;
      })
    },
    methods:{
      addCart(item,option){
        let {name} = item
        let myItem = {};
        myItem.name = name + ` ${option.size} 寸`;
        let isExit = false;
        this.myCart.forEach(val=>{
          if(val.name === myItem.name){
            isExit = true;
            val.num++;
          }
        })
        if(!isExit){
          myItem.num = 1;
          myItem.price = option.price;
          this.myCart.push(myItem);
        }
      },
      changeNum (shopName,type) {
        this.myCart.forEach((val)=>{
          if(val.name === shopName){
            if(type === 'add'){
              val.num ++ ;
            }else if(type === 'reduce'){
              val.num > 1 ? val.num -- : 1 ;
            }
          }
        })
      },
      remove(shopName){
        let myCart = this.myCart.filter((val)=>{
          if(val.name === shopName){
            return false;
          }else{
            return true;
          }
        })
        this.myCart = myCart;
      }
    },
    computed : {
      priceSum () {
        let prices = 0;
        this.myCart.forEach(item=>{
          prices += item.num * item.price
        })
        return prices;
      }
    }
  }

</script>
