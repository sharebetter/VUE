<template>
    <div>
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: '/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import slideShow from '@/components/slideShow'
export default {
  components: {
    slideShow
  },
  data() {
      return {
          invTime: 2000,
          slides: [
            {
              src: require('../../assets/slideShow/pic1.jpg'),
              title: 'xxx1',
              href: 'detail/analysis'
            },
            {
              src: require('../../assets/slideShow/pic2.jpg'),
              title: 'xxx2',
              href: 'detail/count'
            },
            {
              src: require('../../assets/slideShow/pic3.jpg'),
              title: 'xxx3',
              href: 'http://xxx.xxx.com'
            },
            {
              src: require('../../assets/slideShow/pic4.jpg'),
              title: 'xxx4',
              href: 'detail/forecast'
            }
          ],
          boardList: [
            {
              title: '开放产品',
              description: '开放产品是一款开放产品',
              id: 'car',
              toKey: 'index/analysis',
              saleout: false
            },
            {
              title: '品牌营销',
              description: '品牌营销帮助你的产品更好地找到定位',
              id: 'earth',
              toKey: 'index/count',
              saleout: false
            },
            {
              title: '使命必达',
              description: '使命必达快速迭代永远保持最前端的速度',
              id: 'loud',
              toKey: 'index/forecast',
              saleout: true
            },
            {
              title: '勇攀高峰',
              description: '帮你勇闯高峰，到达事业的顶峰',
              id: 'hill',
              toKey: 'index/publish',
              saleout: false
            }
          ]
      }
  }
}
</script>

<style>

</style>
