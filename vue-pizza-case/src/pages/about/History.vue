<template>
    <Panel>
      <!-- 设置插槽 -->
      <template slot="title">
          <h3 class="panel-title">历史订单</h3>
      </template>
      <template slot="content">
          <h4 class="card-title">历史订单</h4>
          <p class="card-text">8888888@qq.com</p>
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