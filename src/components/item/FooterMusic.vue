<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <!-- 歌名 -->
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
      <svg t="1666794867856" class="icon play" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2545" width="200" height="200" @click="play" v-if="isbtnShow">
        <!-- 点击图标触发play事件 -->
        <path
          d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
          fill="#5C5C66" p-id="2546 list"></path>

      </svg>
      <svg t="1666922682685" class="icon stop" viewBox="0 0 1048 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4998" width="200" height="200" @click="play" v-else>
        <path
          d="M524.272128 0.018022C241.513165 0.018022 12.288102 229.245952 12.288102 512.005018c0 112.734003 36.43904 216.957952 98.17897 301.537997l38.667981-40.258048C97.458176 699.230003 67.143168 609.158963 67.143168 512.005018 67.143168 259.540992 271.807078 54.872986 524.272128 54.872986c252.45696 0 457.120973 204.668006 457.120973 457.132032 0 252.460954-204.664013 457.118003-457.120973 457.118003-96.240026 0-185.530982-29.744026-259.189043-80.53504l-34.539008 42.797978c83.150029 58.344038 184.437965 92.596019 293.728973 92.596019 282.758963 0 511.984026-229.220966 511.984026-511.976038C1036.256154 229.245952 807.031091 0.018022 524.272128 0.018022zM615.693107 256.011981l0 511.987 54.855 0L670.548107 256.012 615.693128 256.012zM377.996083 256.011981l0 511.987 54.855 0L432.851083 256.012 377.996128 256.012z"
          p-id="4999"></path>
      </svg>

      <svg t="1666859665570" class="icon list" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4073" width="200" height="200">
        <path
          d="M981.333333 533.333333a21.333333 21.333333 0 0 1-21.333333 21.333334H448a21.333333 21.333333 0 0 1 0-42.666667h512a21.333333 21.333333 0 0 1 21.333333 21.333333zM533.333333 170.666667h426.666667a21.333333 21.333333 0 0 0 0-42.666667H533.333333a21.333333 21.333333 0 0 0 0 42.666667z m426.666667 725.333333H64a21.333333 21.333333 0 0 0 0 42.666667h896a21.333333 21.333333 0 0 0 0-42.666667zM56.046667 663.333333C47.166667 649.333333 42.666667 634.3 42.666667 618.666667s4.5-30.666667 13.38-44.666667c8.053333-12.666667 19.333333-23.946667 33.613333-33.44C117.333333 522.146667 153.646667 512 192 512s74.7 10.146667 102.34 28.58c1.48 0.98 2.913333 2 4.326667 3.006667V64a21.333333 21.333333 0 0 1 42.626666-1.266667c1.073333 18.04 5.806667 52.666667 25.446667 82.08 7.713333 11.553333 16.846667 21.006667 27.153333 28.133334 13.853333 5.513333 26.453333 14.113333 37.493334 25.606666 22.813333 23.753333 32.966667 53.493333 37.466666 74.266667a21.333333 21.333333 0 0 1-41.706666 9.026667c-2.726667-12.586667-9.8-36.313333-26.533334-53.733334C393.433333 220.666667 385.373333 215.226667 376.666667 212a21.18 21.18 0 0 1-4.36-2.186667A140.893333 140.893333 0 0 1 341.333333 182v436.666667c0 15.633333-4.5 30.666667-13.38 44.666666-8.053333 12.666667-19.333333 23.946667-33.613333 33.44-27.64 18.433333-64 28.58-102.34 28.58s-74.666667-10.146667-102.34-28.58C75.406667 687.26 64.1 676 56.046667 663.333333zM85.333333 618.666667c0 20.82 17.54 35.62 28 42.586666 20.706667 13.806667 48.666667 21.413333 78.666667 21.413334s57.966667-7.606667 78.666667-21.413334c10.453333-6.966667 28-21.766667 28-42.586666s-17.54-35.62-28-42.586667C250 562.273333 222 554.666667 192 554.666667s-57.966667 7.606667-78.666667 21.413333c-10.46 6.966667-28 21.766667-28 42.586667z"
          fill="#5C5C66" p-id="4074"></path>
      </svg>
    </div>

    <!--  播放 -->
    <audio ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3 `"></audio>

    <!-- 弹出层 -->
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%', width: '100%' }">
      <!-- MusicDetail.vue -->
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow"
        :addDuration="addDuration" />
    </van-popup>

  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MusicDetail from '@/components/item/MusicDetail.vue'

export default {
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
    // 滚动歌词
    this.updateTime()
  },
  // 获取歌词 
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
    this.addDuration()
  },
  methods: {
    // 播放控制
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.updateIsbtnShow(false)
        this.updateTime() //  开启定时任务
      } else {
        this.$refs.audio.pause()
        this.updateIsbtnShow(true)
        clearInterval(this.interval) //  清除定时任务
      }
    },
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration)
    },
    updateTime: function () {
      // 每1s执行一次
      this.interval = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime)
      }, 10)
    },
    // (解构)提供方法
    ...mapMutations(['updateIsbtnShow', 'updateDetailShow', 'updateCurrentTime', 'updateDuration'])
  },
  // 监听
  watch: {
    // 下标改变自动播放
    playListIndex: function () {
      // 歌词
      this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false)
      }
    },
    // 播放优化
    playList: function () {
      this.$store.dispatch("getLyric", this.playList[this.playListIndex].id)
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true
        this.updateIsbtnShow(false)
      }
    }
  },
  components: {
    MusicDetail
  }

}
</script>

<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex; // 左右排列
  padding: .2rem;
  justify-content: space-between; // 两端对齐

  .footerLeft {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center; // 垂直居中

    p {
      margin-left: .06rem;
      font-weight: bold;
      font-size: small;
    }

    span {
      margin-left: .06rem;
      font-size: .24rem;
      color: #999;
    }

    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%; // 圆角边框
    }
  }

  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      width: .6rem;
      height: .6rem;
    }
  }
}
</style>