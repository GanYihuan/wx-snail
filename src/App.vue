<script>
// import { showSuccess, get } from './util'
// import qcloud from 'wafer2-client-sdk'
// import config from './config'

export default {
	async created() {
    /* 防止报错: 微信开发者工具 -> detail -> Does not verify ...(勾上), 上线时关掉 */
		/* wx.request: 发起网络请求, util 替代下面 */
		// wx.request({
		// 	url: (config.host = '/weapp/demo'),
		// 	success: function(res) {
		// 		console.log(res)
		// 	}
		// })

		/* **util.js/request** 替代上面的网络请求 */
		// const res = await get('/weapp/demo')
		// console.log(123, res)
		console.log('小程序启动了')

		/* 登录可以获取用户信息 */
		/* 获取缓存数据 */
		// let user = wx.getStorageSync('userInfo')
		// if (!user) {
		// 	qcloud.setLoginUrl(config.loginUrl)
		// 	qcloud.login({
		// 		success: function(userInfo) {
		// 			console.log('login success!', userInfo)
		// 			showSuccess('login success!')
		// /* 数据缓存 */
		// 			wx.setStorageSync('userInfo', userInfo)
		// 		},
		// 		fail: function(err) {
		// 			console.log('login fail', err)
		// 		}
		// 	})
		// }
	}

	// created() {
	/* 调用API从本地缓存中获取数据 */
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
