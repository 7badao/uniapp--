import Vue from 'vue'
import App from './App'
import {myRequest} from'./util/api.js'
// 挂载到vue原型上
Vue.prototype.$myRequest = myRequest
// 全局过滤器
Vue.filter('formatDate',(date)=>{
	// 获取时间
	const nDate = new Date(date)
	// 获取年  
	const year = nDate.getFullYear()
	// 获取月 转成字符串 再判断是否满足两位
	const month = nDate.getMonth().toString().padStart(2, 0)
	// 获取天
	const day = nDate.getDay().toString().padStart(2, 0)
	return year + '-' + month + '-' + day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
