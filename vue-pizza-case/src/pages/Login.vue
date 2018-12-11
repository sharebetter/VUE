<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="center-block" src="../../src/assets/icon.png" alt="">

          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="username">用户名</label>
              <input
                class="form-control"
                v-model="username"
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      data:[],
      username:'admin',
      password:'123'
    }
  },
   // 组件内的守卫
  beforeRouteEnter: (to, from, next) => {
    // this.$store.dispatch("setUser",null)  //此时vm还未加载，所以this为undefine
    next(vm => vm.$store.dispatch("setUser",null))   //使用回调
  },
  methods:{
    onSubmit () {
       let {username,password} = this.data
        if(this.username === username && this.password === password){
          alert('登录成功');
            this.$store.dispatch("setUser", username)
            this.$router.push({name:'homeLink'})
        }else{
          alert("账号或密码错误!")
          this.$store.dispatch("setUser",null)
        }
    }
  },
  mounted () {
    axios.get('https://easy-mock.com/mock/5bbb0f2a47fcad6715a0a7a7/management/login').then(res=>{
       this.data = res.data.result[0];
    })
  }
}
</script>
