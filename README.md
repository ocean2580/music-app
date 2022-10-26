## 配置
/public/js/rem.js 适配屏幕
@/App.vue 主界面
@/main.js 全局配置
修改配置文件需要重启项目更新

@/plugins/index.js 全局引入的部分库
@/router/index.js 注册路由

## HomeView.vue
/components/home/TopNav.vue 头部导航栏(三部分)
/components/home/SwiperTop.vue 轮播图
/components/home/IconList.vue 图标列表
/components/home/MusicList.vue 推荐歌单

## ItemMusic.vue
/components/item/ItemMusicTop.vue 顶部设计

## @/request/api
/request/index.js 基础请求地址/数据
/request/api/home.js (首页)具体请求数据
/request/api/item.js (歌单)具体请求

## 设计
props父传子
/views/ItemMusic.vue -> /components/item/ItemMusicTop.vue