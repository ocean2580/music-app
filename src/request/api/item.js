import service from '../index.js';

// 获取歌单详情
export function getMusicItemList(data) {
  return service({
    method: "GET",
    // 模板字符串
    url: `/playlist/detail?id=${data}`
  })
}

// 获取歌单所有歌曲
export function getItemList(data) {
  return service({
    method: "GET",
    // 模板字符串
    // limit=20&offset=0
    url: `/playlist/track/all?id=${data}&offset=0`
  })
}