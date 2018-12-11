<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item.id)" class="btn btn-sm btn-danger">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from '@/components/NewPizza.vue'
  export default{
    data(){
      return{
        getMenuItems:[]
      }
    },
    components:{
      'app-new-pizza':NewPizza
    },
    mounted(){
      fetch("https://easy-mock.com/mock/5c0dda89b37d3f15023ab4cf/shop/pizza")
          .then(res => {
            return res.json()
          })
          .then(res => {
            let data = res.result;
            this.getMenuItems = data.map((item)=>{
              return {'id':item.id,'name':item.name};
            })
          })
    },
    methods:{
      deleteData(itemId){
        this.getMenuItems = this.getMenuItems.filter((item)=>{
          return item.id !== itemId;
        })
      }
    }
  }
</script>