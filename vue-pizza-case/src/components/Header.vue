<template>
  <div class="bs-example bs-navbar-top-example" data-example-id="navbar-fixed-to-top">
    <nav class="navbar navbar-default navbar-fixed-top">
      <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Pizza点餐系统</a>
            <a class="vertical" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
            <ul class="nav navbar-nav">
                <!-- <li class="active"><a href="#">Home</a></li> -->
                <li><a><router-link to='/'>主页</router-link></a></li>
                <li><a><router-link to='/menu'>菜单</router-link></a></li>
                <li><a><router-link :to="{name:'adminLink'}">管理</router-link></a></li>
                <li><a><router-link to='/about'>关于我们</router-link></a></li>
            </ul>
            <ul class="nav navbar-nav pull-right" v-if="!isLogin">
                <li><a><router-link to='/login'>登录</router-link></a></li>
                <li><a><router-link to='/register'>注册</router-link></a></li>
            </ul>
            <ul class="nav navbar-nav pull-right" v-else>
                <li><a>{{user}}</a></li>
                <li><a @click="logout"><router-link to='/login'>退出</router-link></a></li>
            </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default{
     data () {
       return {

       }
     },
     methods:{
       logout () {
         this.$store.dispatch("setUser",null)
       }
     },
     computed: {
        user () {
          return this.$store.getters.currentUser
        },
        isLogin () {
          return this.$store.getters.isLogin
        }
     }
  }

</script>

<style scoped>
  .vertical{
      display: inline-block;
      margin: 12px 20px 0 0;
  }
</style>
