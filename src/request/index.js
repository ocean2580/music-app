import axios from 'axios';

// 基础数据
let service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
})

// 导出
export default service