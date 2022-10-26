<template>
  <div class="home">
    <!-- 3.引用 -->
    <TopNav/>
    <SwiperTop/>
    <IconList/>
  </div>
</template>

<script>

// @ is an alias to /src
// 1.引入
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop.vue'
import IconList from '@/components/home/IconList.vue'

export default {
  name: "HomeView",
  // 2.注册
  components: {
    TopNav, SwiperTop, IconList
  },
};
</script>
