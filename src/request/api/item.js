import service from '../index.js';

// 获取歌单详情
export function getMusicItemList(data) {
  return service({
    method: "GET",
    // 模板字符串
    url: `/playlist/detail?id=${data}`
  })
}

