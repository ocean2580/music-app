<template>
  <div class="topNav">

    <div class="topleft">
      <svg t="1666706166595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="4992">
        <path
          d="M898.8 278.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 547.408H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64zM898.8 816.4H152.8a32 32 0 0 1 0-64h746a32 32 0 0 1 0 64z"
          fill="" p-id="4993"></path>
      </svg>
    </div>

    <div class="topContent">
      <!-- 跳转 -->
      <span @click="$router.push('/infoUser')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>

    <!-- 路由跳转 -->
    <div class="topright search" @click="$router.push('/search')">
      <svg t="1666707999638" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="9856" width="200" height="200">
        <path
          d="M959.9 857.3L745.8 666.9c38.9-58.6 61.6-128.9 61.6-204.4 0-204.3-166.2-370.6-370.6-370.6S66.3 258.2 66.3 462.5s166.2 370.6 370.6 370.6c94.1 0 180.1-35.3 245.6-93.3l213.4 189.7 64-72.2z m-523.1-96.6c-164.4 0-298.2-133.8-298.2-298.2s133.8-298.2 298.2-298.2S735 298.1 735 462.5 601.2 760.7 436.8 760.7z"
          p-id="9857"></path>
      </svg>
    </div>

  </div>
</template>

<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .topContent {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;

    .active {
      // 加粗
      font-weight: 900;
    }
  }

  .topright,
  .topleft {
    margin-top: 5px;
  }
}
</style>
