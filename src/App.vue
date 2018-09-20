<script>
// import { showSuccess, get } from './util'
// import qcloud from 'wafer2-client-sdk'
// import config from './config'

export default {
	async created() {
		// wx.request({
		// 	url: (config.host = '/weapp/demo'),
		// 	success: function(res) {
		// 		console.log(res)
		// 	}
		// })

		// let user = wx.getStorageSync('userInfo')
		// if (!user) {
		// 	qcloud.setLoginUrl(config.loginUrl)
		// 	qcloud.login({
		// 		success: function(userInfo) {
		// 			console.log('login success!', userInfo)
		// 			showSuccess('login success!')
		// 			wx.setStorageSync('userInfo', userInfo)
		// 		},
		// 		fail: function(err) {
		// 			console.log('login fail', err)
		// 		}
		// 	})
		// }
		// const res = await get('/weapp/demo')
		// console.log(123, res)
		console.log('小程序启动了')
	}

	// created() {
	// 	// 调用API从本地缓存中获取数据
	// 	const logs = wx.getStorageSync('logs') || []
	// 	logs.unshift(Date.now())
	// 	wx.setStorageSync('logs', logs)
	// 	console.log('app created and cache logs by setStorageSync')
	// }
}
</script>

<style>
.text-footer {
	text-align: center;
	font-size: 12px;
	margin-bottom: 5px;
}
.text-primary {
	color: #ea5149;
}
.page-title {
	padding-left: 20px;
	background: #eee;
	line-height: 40px;
	font-size: 14px;
}
.right {
	float: right;
}
.btn {
	color: white;
	background: #ea5a49;
	margin-bottom: 10px;
	padding-left: 15px;
	padding-left: 15px;
	border-radius: 2px;
	font-size: 16px;
	line-height: 40px;
	height: 40px;
	width: 100%;
}
.btn:active {
	background: #fa5a49;
}
</style>
