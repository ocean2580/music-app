<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators="false">
        <!-- 循环, 渲染加前缀 -->
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <!-- 点击跳转， path 为 router/index.js 中注册的路径 -->
          <router-link :to="{path:'/itemMusic', query:{id:item.id}}">
            <img :src="item.picUrl" alt="" >
            <span class="playCount">
              <svg t="1666767146341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21950" width="200" height="200"><path d="M512 947.2c-240.128 0-435.2-195.072-435.2-435.2s195.072-435.2 435.2-435.2 435.2 195.072 435.2 435.2-195.072 435.2-435.2 435.2z m0-828.928c-217.088 0-393.728 176.64-393.728 393.728s176.64 393.728 393.728 393.728 393.728-176.64 393.728-393.728-176.64-393.728-393.728-393.728z" p-id="21951" fill="#ffffff"></path><path d="M436.736 654.848c-5.632 0-11.264-1.536-16.384-4.608-9.216-5.632-14.848-15.36-14.848-26.624V399.872c0-10.752 5.632-20.48 14.848-26.624 9.216-5.632 20.48-6.144 30.208-1.536l224.256 112.128c10.752 5.12 17.408 15.872 17.408 27.648s-6.656 22.528-17.408 27.648l-224.256 112.64c-4.608 2.048-9.216 3.072-13.824 3.072z m10.24-238.08v190.464l190.464-95.232-190.464-95.232z" p-id="21952" fill="#ffffff"></path></svg>
              {{changeCount(item.playCount)}}
            </span>
            <span class="name">{{item.name}}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>



<script>
import {getMusicList} from "@/request/api/home.js";
import { reactive, onMounted } from "vue";

  export default {
    // vue2写法
    // data() {
    //   return {
    //     musicList: []
    //   }
    // },
    // methods: {
    //   async getMenu() {
    //     let res = await getMusicList()
    //     console.log(res);
    //     this.musicList = res.data.result
    //   },
    //   changeCount:function(num) {
    //     if(num >= 100000000) {
    //       return (num/100000000).toFixed(1) + "亿"
    //     } else if(num >= 10000) {
    //       return (num/10000).toFixed(1) + "万"
    //     }
    //   }
    // },
    // mounted(){
    //   this.getMenu();
    // }

    // Vue3
    setup() {
      const state = reactive({
        musicList: [],
      });
      function changeCount(num) {
        if (num >= 100000000) {
          return (num / 100000000).toFixed(1) + "亿";
        } else if (num >= 10000) {
          return (num / 10000).toFixed(1) + "万";
        }
      }
      onMounted(async () => {
        let res = await getMusicList();
        console.log(res);
        state.musicList = res.data.result;
      });
      return { state,changeCount };
    }
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>