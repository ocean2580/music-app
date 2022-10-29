import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item.js'

export default createStore({
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
    detailShow: false,  // 歌曲详情
    lyricList: {}, // 歌词
    currentTime: 0, // 当前时间
    duration: 0,  // 歌曲总时长
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    pushPlayList: function (state, value) {
      state.playList.push(value)
    },
    updatePlayList: function (state, value) {
      state.playList = value
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList: function (state, value) {
      state.lyricList = value
    },
    updateCurrentTime: function (state, value) {
      state.currentTime = value
      // console.log(value);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDuration: function (state, value) {
      state.duration = value
    }
  },
  // 异步请求
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      console.log(res);
      context.commit("updateLyricList", res.data.lrc)
    }
  },
  modules: {
  }
})
