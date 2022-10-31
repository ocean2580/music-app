## 配置
/public/js/rem.js 适配屏幕  <br/>
@/App.vue 主界面<br/>
@/main.js 全局配置<br/>
修改配置文件需要重启项目更新<br/>

@/plugins/index.js 全局引入的部分库(vant)<br/>
@/router/index.js 注册路由<br/>

## App.vue
router-view <br/>
/components/item/FooterMusic.vue 底部 <br/>

## HomeView.vue
/components/home/TopNav.vue 头部导航栏(三部分) <br/>
/components/home/SwiperTop.vue 轮播图 <br/>
/components/home/IconList.vue 图标列表 <br/>
/components/home/MusicList.vue 推荐歌单 <br/>

## ItemMusic.vue
/components/item/ItemMusicTop.vue 顶部 <br/>
/components/item/MusicDetail.vue 详情 <br/>
/components/item/ItemMusicList.vue 歌曲列表 <br/>

## Search.vue



## @/request/api
/request/index.js 基础请求地址/数据 <br/><br/>

/request/api/home.js (首页)具体请求数据<br/>
/request/api/item.js (歌单)具体请求<br/>

## 设计
props父传子<br/>
/views/ItemMusic.vue -> /components/item/ItemMusicTop.vue<br/><br/>

/store/index.js 存储数据<br/>



## 启动

后台<br/>
	node app.js<br/><br/>

前台<br/>
	cd wyy-app<br/>
	npm run serve<br/>

