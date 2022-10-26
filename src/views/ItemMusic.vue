<template>
  <!-- 父传子 -->
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount" />
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItemList, getItemList } from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue' // 父引子
import ItemMusicList from '@/components/item/ItemMusicList.vue'

export default {
  setup() {
    // 响应式对象
    const state = reactive({
      playlist: {},
      itemList: [] // 歌单歌曲
    })

    onMounted(async () => {
      let id = useRoute().query.id
      console.log(id);

      // 获取歌单详情
      let res = await getMusicItemList(id)
      console.log(res);
      state.playlist = res.data.playlist

      // 获取歌单歌曲
      let result = await getItemList(id)
      state.itemList = result.data.songs

      // 防止页面刷新丢失数据，保存在本地 sessionStorage
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    });
    // 返回值
    return { state };
  },
  components: {
    ItemMusicTop, ItemMusicList
  }

}
</script>
