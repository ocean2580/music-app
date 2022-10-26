import service from '../index.js';

// 获取首页轮播图数据
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2"
  })
}