<template>
    <Panel>
      <!-- 设置插槽 -->
      <template slot="title">
          <h3 class="panel-title">联系我们</h3>
      </template>
      <template slot="content">
          <h4 class="card-title">联系我们</h4>
          <p class="card-text">8888888@qq.com</p>

          <router-link :to="{name:'phoneNumber'}">电话</router-link>
          <router-link :to="{name:'personName'}">联系人</router-link>

          <router-view></router-view>
      </template>
    </Panel>
</template>

<script>
   import Panel from '@/components/Panel';
   export default {
     components:{
       Panel
     }
   }
</script>