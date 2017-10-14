<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
      	<img :src="seller.avatar" alt="" width="64" height="64"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="supports">
          <div class="supports_desc">
            <span class="icon decrease"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
      </div>
      <div class="support-count" @click='show=!show'>
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click='show=!show'>
      <div class="bulletin-title"></div>
      <span class="bulletin-text">
        {{seller.bulletin}}
      </span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%"/>
    </div>
    <transition name='fade'>
      <div v-show="show" class="detail">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <!--评分-->
            <star :score='seller.score'></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support-item" v-for='item in seller.supports'>
              <span class="icon" :class="icon[item.type]"></span>
              <span>{{item.description}}</span>
             </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家信息</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">{{seller.bulletin}}</div>
        </div>
      </div>
      <div  @click='show=!show' class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
    </transition>
  	
  </div>
</template>

<script>
  import star from './star.vue'
  import icon from './icon'
  export default {
    props: ['seller'],
    data () {
      return {
        icon: icon,
        show: false
      }
    },
    components: {
      star
    }
  }
</script>
// scoped 当前这个模板和当前模板下所有的子模板  应用这个样式
<style >
</style>
