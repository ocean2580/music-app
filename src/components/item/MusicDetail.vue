<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg">
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg t="1666770886096" class="icon back" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="23705" width="200" height="200" @click="backHome">
        <!-- 点击返回首页 -->
        <path
          d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
          fill="" p-id="23706">
        </path>
      </svg>

      <div class="leftMarquee">
        <Vue3Marquee style="color: #fff">{{ musicList.al.name }}</Vue3Marquee>
        <span v-for="item in musicList.ar " :key="item">
          {{ item.name }}
        </span>
        <svg t="1666773745260" class="icon list" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="25397" width="200" height="200">
          <path
            d="M711.6 488.624L355.2 152.976a29.36 29.36 0 0 0-42.352 0 31.408 31.408 0 0 0 0 43.552L647.76 512 312.848 827.36a31.408 31.408 0 0 0 0 43.552 29.36 29.36 0 0 0 42.352 0l356.4-335.648a36.32 36.32 0 0 0 0-46.64z"
            p-id="25398"></path>
        </svg>
      </div>
    </div>

    <div class="detailTopRight">
      <svg t="1666774047550" class="icon share" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="29713" width="200" height="200">
        <path
          d="M817.491 614.307c-55.693 0-109.705 35.668-140.704 77.021L431.985 575.543c4.879-17.462 11.64-44.182 11.64-63.199s-4.555-43.95-9.435-61.407l241.495-117.991c30.999 41.353 86.113 77.433 141.807 77.433 93.866 0 169.938-76.074 169.938-169.94 0-93.865-76.072-169.938-169.938-169.938s-169.938 76.073-169.938 169.938c0 13.841 2.123 27.087 5.21 39.966L407.081 396.006c-36.843-52.907-98.014-87.589-167.384-87.589-112.654 0-203.928 91.274-203.928 203.927 0 112.649 91.274 203.929 203.928 203.929 69.371 0 130.542-34.688 167.384-87.597l245.682 115.608c-3.087 12.88-5.21 26.121-5.21 39.961 0 93.866 76.072 169.942 169.938 169.942S987.43 878.111 987.43 784.245C987.43 690.383 911.357 614.307 817.491 614.307zM817.491 119.142c66.887 0 121.301 54.411 121.301 121.296 0 66.892-54.414 121.301-121.301 121.301-66.885 0-121.294-54.409-121.294-121.301C696.197 173.553 750.606 119.142 817.491 119.142zM239.697 666.722c-85.107 0-154.377-69.271-154.377-154.378 0-85.106 69.27-154.382 154.377-154.382 85.107 0 154.377 69.276 154.377 154.382C394.074 597.451 324.804 666.722 239.697 666.722zM817.491 905.546c-66.885 0-121.294-54.41-121.294-121.301 0-66.887 54.409-121.297 121.294-121.297 66.887 0 121.301 54.41 121.301 121.297C938.792 851.136 884.378 905.546 817.491 905.546z"
          p-id="29714"></path>
        <path d="M650.299 681.865" p-id="29715"></path>
      </svg>
    </div>


  </div>
</template>


<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";

export default {
  mounted() {

  },
  props: ['musicList'],
  components: {
    Vue3Marquee
  }
}
</script>


<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}

.detailTop {
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  fill: #fff;

  .detailTopLeft {
    display: flex;
    align-items: center;

    .leftMarquee {
      width: 3rem;
      height: 100%;
      margin-left: 0.4rem;

      span {
        color: #999;
      }

      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #999;
      }
    }
  }
}
</style>