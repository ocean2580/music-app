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

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWordList: [],
      searchKey: ""
    }
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: function () {
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
        this.searchKey = ""
      }
    },
    // 删除历史记录
    delHistory: function () {
      this.keyWordList = []
      localStorage.removeItem("keyWordList")
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
</style>