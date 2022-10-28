<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <svg t="1666794867856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2545" width="200" height="200">
          <path
            d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m-74.666667-213.38a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z"
            fill="#5C5C66" p-id="2546"></path>
        </svg>
        <span>播放全部<span>(共{{ itemList.length }}首)</span></span>
      </div>

      <div class="listRight">
        <svg t="1666795011464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3477" width="200" height="200">
          <path
            d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"
            p-id="3478" fill="#ffffff"></path>
        </svg>
        <span>收藏({{ subscribedCount }})</span>
      </div>
    </div>

    <div class="itemList">
      <div class="item" v-for="(item, i) in itemList" :key="i">
        <!-- 点击触发playMusic事件 -->
        <div class="itemLeft" @click="playMusic(i)">
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  setup(props) {
    console.log(props);
  },
  props: ['itemList', 'subscribedCount'],
  methods: {
    playMusic: function (i) {
      this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i);
    },
    ...mapMutations(['updatePlayList', 'updatePlayListIndex'])
  }
};

</script>

<style lang="less" scoped>
.itemMusicList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon {
        stroke: #333333;
        stroke-width: 20;
      }

      span {
        font-weight: 700;

        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }

    .listRight {
      display: flex;
      align-items: center;
      background-color: red;
      padding: 0.2rem;
      border-radius: 0.4rem;
      color: #fff;

      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #fff;
        margin-right: 0.1rem;
        stroke: #fff;
        stroke-width: 50;
      }
    }
  }

  .itemList {
    width: 100%;

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
}
</style>