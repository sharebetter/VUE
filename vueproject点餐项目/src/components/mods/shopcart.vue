<template>
  <div class="shopCart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo active">
            <i class="icon-shopping_cart"></i>
          </div>
          <div class="badge" v-show='totalPrice>0'>{{tatalCount}}</div>
        </div>
         <div class="price" :class="{'active':totalPrice}">${{totalPrice}}</div>
         <div class="desc" v-show='totalPrice<99'>另需要配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right" :class="{'enough':totalPrice > minPrice}">
        <div class="pay">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
	export default {
	  props: ['deliveryPrice', 'minPrice', 'food'],
	  computed: {
	    totalPrice () {
	      let total = 0
	      this.food.forEach(food => {
	        total += food.price * food.count
	      })
	      return total
	    },
	    tatalCount () {
	      let count = 0
	      this.food.forEach(food => {
	        count += food.count
	      })
	      return count
	    },
	    // 还差多少起送
	    payDesc () {
	      if (this.totalPrice === 0) {
	        return `$${this.minPrice}起送`
	      } else if (this.totalPrice < this.minPrice) {
	        return `还差${this.minPrice - this.totalPrice}起送`
	      } else {
	        return '去结算'
	      }
	    }
	  }
	}
</script>

