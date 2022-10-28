import { Swipe, SwipeItem, Button, Popup } from 'vant';

// 放入数组
let plugins = [
  Swipe, SwipeItem, Button, Popup
]

// 导出方法
export default function getVant(app) {
  plugins.forEach(item => {
    return app.use(item);
  })
}