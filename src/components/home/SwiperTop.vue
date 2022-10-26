<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render class="van-swipe">
      <van-swipe-item v-for="image in state.images" :key="image" class="van-swipe-item">
        <img :src="image.pic"  class="img"/>
      </van-swipe-item>
    </van-swipe>
  </div>
 
</template>
<script>

// 导包
// @ 即 寻址到src
import axios from 'axios'
import {reactive, onMounted} from 'vue'
import {getBanner} from "@/request/api/home.js"

export default {
  setup() {
    // 内容
    const state = reactive({
      images:[
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.__rdLDAHl8Oq1i7lIxb3CQHaEo?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'https://tse3-mm.cn.bing.net/th/id/OIP-C.a2oRzJqJ7QsS-JGx6dQnQQHaE8?w=297&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'https://tse4-mm.cn.bing.net/th/id/OIP-C.i0zZJYR90SrQeuDpaDFyuAHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'https://tse1-mm.cn.bing.net/th/id/OIP-C.hYG5ykAxKa1rSC_zcXY1AgHaDt?w=310&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    ]});

    onMounted(async ()=>{
      // axios.get('http://localhost:3000/banner?type=2')
      // .then(function (response) {
      //   // 成功
      // console.log(response);
      // state.images = response.data.banners
      // })
      let res = await getBanner();
      state.images = res.data.banners
    })
    return { state };
  },
};

</script>

<style lang="less" scoped>
// 标签里不用class就找不到，但是网页渲染时会有自定义的class
#swiperTop{
  .van-swipe{
    width: 100%;
    height: 3rem;
      .van-swipe-item {
        padding: 0 0.2rem;
        .img{
          width: 100%;
          height: 100%;
          border-radius: 0.2rem;
        }
      }
  }

}  
</style>
