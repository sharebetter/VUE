<template>
  <div class="cartcontrol">
    <transition name="fadeRotate">
      <div class="cart-decrease" v-show="food.count>0" @click='decreaseCart'>
        <span class="icon-remove_circle_outline inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click='addCart'>
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: ['food'],
    methods: {
      addCart () {
        if (typeof this.food.count === 'undefined') {
          Vue.set(this.food, 'count', 0)
        }
        this.food.count++
      },
      decreaseCart () {
        this.food.count--
      }
    }
  }
</script>

<style>
</style>
