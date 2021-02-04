import axios from 'axios'
// import store from '../store'

// 创建 api 实例
const cusAxios = axios.create({
  baseURL: import.meta.env.VUE_APP_API_BASE_URL, // process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 60
})

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json'
// api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截
cusAxios.interceptors.request.use(config => {
  // let accessToken = store.state.user.accessToken
  // if (accessToken) {
  //   config.headers.Authorization = `Bearer ${ accessToken }`
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
cusAxios.interceptors.response.use(res => {
  // 请求成功
  return Promise.resolve(res)
}, error => {
  // 请求失败
  return Promise.reject(error)
})

export default cusAxios