## App.vue 主界面

```vue
<template>
  <!-- 路由占位符，跳转到path为'/'的页面 -->
  <router-view />
  <!-- 2.使用组件 -->
  <FooterMusic v-show="$store.state.isFooterMusic" />
</template>

<script>
// 1.引入组件
import FooterMusic from '@/components/item/FooterMusic.vue'
export default {
  components: {
    FooterMusic
  }
}
</script>

<!-- 全局CSS -->
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 0.5rem;
  height: 0.5rem;
}

a {
  color: black;
}
</style>
```



```vue
 <!-- 点击跳转到path对应的view -->
<router-link to="/"></router-link>
```



## views/HomeView.vue	默认主路径页面

```vue
<template>
  <div class="home">
    <!-- 3.组件引用 -->
    <TopNav/>
    <SwiperTop/>
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>

// @ is an alias to /src
// 1.引入
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'

export default {
  name: "HomeView",
  // 2.注册
  components: {
    TopNav, SwiperTop, IconList, MusicList
  },
};
</script>

```



## router/index.js	路由注册中心

```javascript
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    component: () => import(/* webpackChunkName: "about" */ '../views/ItemMusic.vue')
  },
  {
    path: '/infoUser',
    name: 'InfoUser',
    // 路由守卫
    beforeEnter: (to, from, next) => {
      //TODO || &&
      if (store.state.isLogin || store.state.token || localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoUser.vue')
  }
  	...
]

// 跳转前
router.beforeEach((to, from) => {
  if (to.path === '/login') {
    store.state.isFooterMusic = false
  } else {
    store.state.isFooterMusic = true
  }
})
export default router
```



## store/index.js	状态容器

“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。

1. Vuex 的状态存储是**响应式**的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 改变 store 中的状态的唯一途径就是显式地**提交 (commit) mutation**。

```shel
npm install vuex@next --save
```



```js
import { createStore } from 'vuex'

export default createStore({
   // 状态 
   state: {
    playList: [{  // 播放列表
      al: {
        id: 110646,
        name: "The Chopin Collection: The Nocturnes",
        pic: 1419469524716144,
        picUrl: "https://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg"
      },
      id: 1060914,
      ar: [{
        name: 'unknown'
      }]
    }],
    playListIndex: 0, // 默认下标
    isbtnShow: true, // 暂停按钮显示
    lyricList: {}, // 歌词
    token: "", // 令牌
  },
    
  // 同步
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
         ...
  }
      
  // 异步请求
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      console.log(res);
      context.commit("updateLyricList", res.data.lrc)
    },
        ...
  }
})

```



==组件调用==

- state 访问

```js
// 全局
let count = this.$store.state.count
```



```vue
<script>
import { mapState } from 'vuex'
    
export default {
 computed: {
  // 1.(解构映射)拿数据
  ...mapState(['playList', ' '])   
 }, 
}
</script>

<!-- 2.调用 -->
<img :src="playList[playListIndex].al.picUrl" alt="" />

// let value = this.playList[this.playListIndex].id
```



- mutation 改变

```vue
<script>
import { mapMutations } from 'vuex'
    
export default {
 methods: {
	// 1.(解构)提供方法
    ...mapMutations(['updateIsbtnShow', 'updateDetailShow', 'updateCurrentTime', 'updateDuration'])
 }, 
}
</script>

<!-- 2.调用 -->
<div class="footerLeft" @click="updateDetailShow">
 
// this.updateIsbtnShow(false)    
```



```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```



- actions 异步请求

```js
// 全局
this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
```



## components/

```vue
<script>
export default {
  // 局部数据  
  data() {
    return {
      interval: 0
    }
  },
    
  // 计算属性
  computed: {
    // (解构)拿数据
    ...mapState(['playList', 'playListIndex', 'isbtnShow', 'detailShow'])
  },
    
  // 渲染
  mounted() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
    this.updateTime()
  },
    
  // 刷新 
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
    this.addDuration()
  },
    
  // 方法区  
  methods: {
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration)
    },
    // (解构)提供方法
    ...mapMutations(['updateIsbtnShow', 'updateDetailShow', 'updateCurrentTime', 'updateDuration'])
  },
    
  // 监听
  watch: {
    // 播放优化
    playList: function () {
      this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true
        this.updateIsbtnShow(false)
      }
    }
  },
    
  // 组件引用  
  components: {
    MusicDetail
  }

}
</script>
```





- 数据父传子

```vue
<template>
  <!-- 2.父传子 -->
  <ItemMusicTop :playlist="state.playlist" />
</template>

<script>
    import ItemMusicTop from '@/components/item/ItemMusicTop.vue' // 1.父引子    
</script>
```



```vue
<script>
export default {
  // 子接父
  props: ['playlist']
}
</script>
```



<img src="https://upload-images.jianshu.io/upload_images/1197462-dba93c122e5d5d0e.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp" style="zoom: 50%;" />



   [子传父](https://blog.csdn.net/weixin_42220533/article/details/90482860)



## request	请求处理中心

==index.js	服务配置中心==

```javascript
import axios from 'axios';

// 基础数据
let service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
})

// 导出
export default service
```



api/home.js

```javascript
import service from '../index.js';

// 获取首页轮播图数据
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2"
  })
}

// 搜索
export function getSearchMusic(data) {
  return service({
    method: "GET",
    url: `/search?keywords=${data}`
  })
}
```



## main.js 全局配置中心

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import getVant from './plugins'

const app = createApp(App)
// 引用
getVant(app)
app.use(store)
app.use(router).mount('#app')
```



## plugins/index.js	插件

```javascript
import { Swipe, SwipeItem, Button, Popup } from 'vant';

// 放入数组
let plugins = [
  Swipe, SwipeItem, Button, Popup
]

// 导出方法
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item);
  })
}
```



## public/js/rem.js	适配设备分辨率

```javascript
function remSize() {
  // 获取设备宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) deviceWidth = 750;
  if (deviceWidth <= 320) deviceWidth = 320;
  // 750px --> 1rem = 100px
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
  // 字体大小
  document.querySelector("body").style.fontSize = 0.3 + "rem";
}

remSize();

window.onresize = function () {
  remSize();
};
```



public/index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
            <!-- 配置 -->
    <script src="js/rem.js"></script>
  </body>
</html>

```



## 其他

```vue
<!-- 跳转 -->
<span @click="$router.push('/infoUser')">我的</span>
```



```html
<!-- 弹出层 -->
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%', width: '100%' }">
      <!-- MusicDetail.vue -->
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"
        :addDuration="addDuration" />
    </van-popup>
```



```html
<!-- 点击跳回上一页 -->
<img src="..." @click="$router.go(-1)" />
```

