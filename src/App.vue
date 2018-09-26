<script>
// import { showSuccess, get } from './util'
// import { showSuccess } from './util'
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

    /* [获取用户信息 wafer2-client-sdk](https://github.com/tencentyun/wafer-client-sdk/) */
    /* 获取用户信息后数据会储存到数据库里 cSessionInfo */
		/* 设置登录地址 */
		// qcloud.setLoginUrl(config.loginUrl)
		// qcloud.login({
		// 	success: function(userInfo) {
		// 		console.log('登录成功', userInfo)
		// 	},
		// 	fail: function(err) {
		// 		console.log('登录失败', err)
		// 	}
		// })

		/* [获取用户信息 wafer2-client-sdk](https://github.com/tencentyun/wafer-client-sdk/) */
		/* [获取缓存数据](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html) */
		// let user = wx.getStorageSync('userInfo')
		// if (!user) {
		// 	qcloud.setLoginUrl(config.loginUrl)
		// 	/* login 是 async, 一旦跳转到 Me.vue/onShow 调用 getStorageSync(), 由于 async, 没执行到下面的 setStorageSync(), 出问题 */
		// 	/* 修复方法: 将其写入 Me.vue 中 */
		// 	qcloud.login({
		// 		success: function(userInfo) {
		// 			console.log('登录成功', userInfo)
		// 			showSuccess('登录成功')
		// 			/* [数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
		// 			wx.setStorageSync('userInfo', userInfo)
		// 		},
		// 		fail: function(err) {
		// 			console.log('登录失败', err)
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
	margin-bottom: 5px;
	text-align: center;
	font-size: 12px;
}
.text-primary {
	color: #ea5149;
}
.page-title {
	padding-left: 20px;
	line-height: 40px;
	font-size: 14px;
	background: #eee;
}
.right {
	float: right;
}
.btn {
	margin-bottom: 10px;
	padding-left: 15px;
	border-radius: 2px;
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-size: 16px;
	color: white;
	background: #ea5a49;
}
.btn:active {
	background: #fa5a49;
}
</style>
