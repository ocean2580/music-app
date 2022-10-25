<template>
 <van-swipe :autoplay="3000" lazy-render class="van-swipe">
  <van-swipe-item v-for="image in images" :key="image" class="van-swipe-item">
    <img :src="image" class="img"/>
  </van-swipe-item>
 </van-swipe>
</template>

<style lang="less" scoped>
// 标签里不用class就找不到，但是网页渲染时会有自定义的class
  .van-swipe{
    widows: 100%;
    padding: 10px;
    .van-swipe__track {
      .van-swipe-item {
        .img{
          width: 100%;
          height: 3rem;
        }
      }
    }
  }
</style>

<script>
export default {
  setup() {
    // 内容
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ];
    return { images };
  },
};

</script>

