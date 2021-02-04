import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import './assets/stylesheets/application.scss'

// https://element-plus.gitee.io/#/zh-CN/component/i18n
import ElementPlus from 'element-plus'
// import 'dayjs/locale/zh-cn'
import elementPlusLocale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
// app.config.globalProperties.$ELEMENT = { size: 'mini', zIndex: 2000 }
app.use(store).use(router).use(api)
	.use(ElementPlus, { size: 'small', zIndex: 3000, elementPlusLocale })
	.mount('#app')