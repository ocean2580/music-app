import { Swipe, SwipeItem, Button } from 'vant';

// 放入数组
let plugins = [
  Swipe, SwipeItem, Button
]

// 导出方法
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item);
  })
}