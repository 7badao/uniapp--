// 封装自己的promise请求
// 封装基地址
const BASE_URL = 'http://localhost:8082'
export const myRequest = (optios)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+optios.url,
			// 不传默认为GET请求
			method:optios.method || 'GET',
			// 不传默认为对象
			data:optios.data||{},
			success:(res)=>{
				if(res.data.status!==0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				// 成功就调取resolve
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:"请求接口失败"
				})
				// 调用reject
				reject(err)
			}
		})
	})
}