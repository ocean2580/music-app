<template>
  <!-- 父传子 -->
  <ItemMusicTop :playlist="state.playlist"/>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import {getMusicItemList} from '@/request/api/item.js'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue' // 父引子

  export default {
    setup() {
      // 响应式对象
      const state = reactive({
        playlist: {}
      })

      onMounted(async()=>{
        let id = useRoute().query.id
        console.log(id);
        let res = await getMusicItemList(id)
        console.log(res);
        state.playlist = res.data.playlist
      });

      return {state};
    },
    components: {
      ItemMusicTop
    }
    
  }
</script>
