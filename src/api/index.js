import cusAxios from './cusAxios'
import axios from 'axios'
import users from './modules/users'

const api = {
  // 登录
  login (data) { return cusAxios.post('/api/login', data) },
  // 获取登录信息
  getLoginInfo (params) { return cusAxios.get('/api/login/info', { params }) },
  ...users
}

export default {
  install (vueApp) {
    Object.defineProperty(vueApp.config.globalProperties, '$api', {
      get: () => api
    })
    Object.defineProperty(vueApp.config.globalProperties, '$cusAxios', {
      get: () => cusAxios,
    })
    Object.defineProperty(vueApp.config.globalProperties, '$axios', {
      get: () => axios,
    })
  }
}