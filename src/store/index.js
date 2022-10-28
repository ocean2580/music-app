import { createStore } from 'vuex'

export default createStore({
  state: {
    playList: [{  // 播放列表
      al: {
        id: 110646,
        name: "The Chopin Collection: The Nocturnes",
        pic: 1419469524716144,
        picUrl: "https://p1.music.126.net/Dvhon4mH7qimTtE7q3omTw==/1419469524716144.jpg"
      },
      id: 1060914
    }],
    playListIndex: 0, // 默认下标
    isbtnShow: true, // 暂停按钮显示
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    }
  },
  actions: {
  },
  modules: {
  }
})
