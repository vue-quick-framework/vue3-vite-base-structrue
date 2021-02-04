import { createApp } from 'vue'
import App from './App.vue'
import './assets/stylesheets/application.scss'

// https://element-plus.gitee.io/#/zh-CN/component/i18n
import ElementPlus from 'element-plus'
// import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
	.use(ElementPlus, { size: 'small', zIndex: 3000, locale })
	.mount('#app')
