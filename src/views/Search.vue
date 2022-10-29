<template>
  <div class="searchTop">
    <svg t="1667032917895" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="2551" width="200" height="200" @click="$router.go(-1)">
      <path
        d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
        fill="" p-id="2552"></path>
    </svg>
    <input type="text" placeholder="majiko" v-model="searchKey" @keydown.enter="enterKey">
  </div>
  <div class="searchHistory">
    <span class="searchSpan">历史</span>
    <span v-for="item in keyWordList" :key="item" class="spanKey" @click="searchHistory(item)">
      {{ item }}
    </span>
    <svg t="1667034274134" class="icon delete" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
      p-id="3491" width="200" height="200" @click="delHistory">
      <path
        d="M840 288H688v-56c0-40-32-72-72-72h-208C368 160 336 192 336 232V288h-152c-12.8 0-24 11.2-24 24s11.2 24 24 24h656c12.8 0 24-11.2 24-24s-11.2-24-24-24zM384 288v-56c0-12.8 11.2-24 24-24h208c12.8 0 24 11.2 24 24V288H384zM758.4 384c-12.8 0-24 11.2-24 24v363.2c0 24-19.2 44.8-44.8 44.8H332.8c-24 0-44.8-19.2-44.8-44.8V408c0-12.8-11.2-24-24-24s-24 11.2-24 24v363.2c0 51.2 41.6 92.8 92.8 92.8h358.4c51.2 0 92.8-41.6 92.8-92.8V408c-1.6-12.8-12.8-24-25.6-24z"
        p-id="3492"></path>
      <path
        d="M444.8 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24zM627.2 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24z"
        p-id="3493"></path>
    </svg>
  </div>

  <div class="itemList">
    <div class="item" v-for="(item, i) in searchList" :key="i">
      <!-- 点击触发playMusic事件 -->
      <div class="itemLeft" @click="updateIndex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
        <div>
          <p>{{ item.name }}</p>
          <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
          }}</span>
        </div>
      </div>

      <div class="itemRight">
        <!-- 没有mv则不显示 -->
        <svg v-if='item.mv != 0' t="1666795371889" class="icon bofang" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="9251" width="200" height="200">
          <path
            d="M206.935452 206.935452a50.844091 50.844091 0 0 0-50.844092 50.844091v508.440914a50.844091 50.844091 0 0 0 50.844092 50.844091h610.129096a50.844091 50.844091 0 0 0 50.844092-50.844091v-508.440914a50.844091 50.844091 0 0 0-50.844092-50.844091z m0-101.688183h610.129096a152.532274 152.532274 0 0 1 152.532274 152.532274v508.440914a152.532274 152.532274 0 0 1-152.532274 152.532274h-610.129096a152.532274 152.532274 0 0 1-152.532274-152.532274v-508.440914a152.532274 152.532274 0 0 1 152.532274-152.532274z"
            fill="#bfbfbf" p-id="9252"></path>
          <path
            d="M651.821251 559.285005l-162.701092 108.297915a50.844091 50.844091 0 0 1-78.808342-42.200596V410.311817a50.844091 50.844091 0 0 1 78.808342-42.200596l162.701092 108.297915a50.844091 50.844091 0 0 1 0 84.401192z"
            fill="#bfbfbf" p-id="9253"></path>
        </svg>
        <svg t="1666795423369" class="icon liebiao" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="10214" width="200" height="200">
          <path
            d="M98.357122 818.73194c-14.213723 0-25.764803 11.532661-25.764803 25.76071 0 14.233166 11.55108 25.770943 25.764803 25.770943M922.866648 818.73194 98.128925 818.73194c-14.21884 0-25.770943 11.532661-25.770943 25.76071 0 14.233166 11.552104 25.770943 25.770943 25.770943l824.737724 0c14.213723 0 25.764803-11.538801 25.764803-25.770943C948.633498 830.262554 937.081395 818.73194 922.866648 818.73194zM98.357122 483.770052c-14.213723 0-25.764803 11.537777-25.764803 25.76992 0 14.229073 11.55108 25.764803 25.764803 25.764803M922.866648 483.770052 98.128925 483.770052c-14.21884 0-25.770943 11.537777-25.770943 25.76992 0 14.229073 11.552104 25.764803 25.770943 25.764803l824.737724 0c14.213723 0 25.764803-11.537777 25.764803-25.764803C948.633498 495.307829 937.081395 483.770052 922.866648 483.770052zM98.357122 148.815327c-14.213723 0-25.764803 11.539824-25.764803 25.768897 0 14.227026 11.55108 25.76378 25.764803 25.76378M98.128925 200.346981l824.737724 0c14.213723 0 25.764803-11.536754 25.764803-25.76378 0-14.229073-11.55108-25.768897-25.764803-25.768897L98.128925 148.814304c-14.21884 0-25.770943 11.539824-25.770943 25.768897C72.359005 188.81125 83.911108 200.346981 98.128925 200.346981z"
            p-id="10215" fill="#cdcdcd"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchMusic } from '@/request/api/home.js'

export default {
  data() {
    return {
      keyWordList: [],
      searchKey: "",
      searchList: [],
    }
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey) {
        // 头插
        this.keyWordList.unshift(this.searchKey)
        // 去重
        this.keyWordList = [...new Set(this.keyWordList)]
        // 长度限制
        if (this.keyWordList.length > 8) {
          this.keyWordList.pop()
        }
        localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList))
        // 搜索
        let res = await getSearchMusic(this.searchKey)
        console.log(res);
        this.searchList = res.data.result.songs
        this.searchKey = ""
      }
    },
    // 删除历史记录
    delHistory: function () {
      this.keyWordList = []
      localStorage.removeItem("keyWordList")
    },
    searchHistory: async function (item) {
      // 搜索
      let res = await getSearchMusic(item)
      console.log(res);
      this.searchList = res.data.result.songs
    },
    updateIndex: function (item) {
      this.$store.commit("pushPlayList", item)
      this.$store.commit("updatePlayListIndex", this.$store.state.playList.length - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0 .2rem;
  display: flex;
  align-items: center;

  input {
    margin-left: .2rem;
    border: none;
    border-bottom: .02rem solid #999;
    width: 90%;
    padding: .1rem;
  }
}

.searchHistory {
  width: 100%;
  height: .2rem;
  position: relative;

  .searchSpan {
    font-weight: 700;
  }

  .spanKey {
    padding: .1rem .2rem;
    border-radius: .4rem;
    background-color: rgb(171, 161, 161);
    margin: .1rem .1rem;
    display: inline-block;
  }

  .icon {
    width: .4rem;
    height: .4rem;
    position: absolute;
    right: .2rem;
  }
}

.itemList {
  width: 100%;
  padding: .2rem;

  .item {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .itemLeft {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;

      .leftSpan {
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }

      div {
        p {
          width: 4.54rem;
          height: .4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }

        span {
          font-weight: 400;
          font-size: .24rem;
          color: #999;
        }

        margin-left: 0.3rem;
      }
    }

    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      position: relative;

      .icon {
        fill: #999;
      }

      .bofang {
        position: absolute;
        left: 0;
      }

      .liebiao {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>