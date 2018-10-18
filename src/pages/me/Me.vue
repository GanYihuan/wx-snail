<template>
  <div class='container'>
    <!-- <p>{{userInfo.openId}}</p> -->
    <div class='userInfo'>
      <img :src='userInfo.avatarUrl' alt="userInfo.avatarUrl"/>
      <p>{{userInfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button class='btn' v-if='userInfo.openId' @click='scanBook'>
      添加图书
    </button>
		<!-- <button class='btn' v-else @click='login'>
      点击登录
    </button> -->
    <button
      v-else
      open-type="getUserInfo"
      lang="zh_CN"
      @click='doLogin'
    >
      点击登录
    </button>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import { showSuccess, post, showModal } from '@/util'
import config from '@/config'
import YearProgress from '@/components/YearProgress'

export default {
	components: {
		YearProgress
	},
	data() {
		return {
			userInfo: {
				avatarUrl: '../../../static/img/unlogin.png',
				nickName: '未登录'
			}
		}
	},
	/* 跳转到该页面就自动执行, onShow 是微信 API 的生命周期 */
	onShow() {
		let userInfo = wx.getStorageSync('userInfo')
		if (userInfo) {
			this.userInfo = userInfo
		}
		// console.log(this.userInfo)
	},
	methods: {
		scanBook() {
			/* [scanCode](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html) */
			wx.scanCode({
				success: res => {
					if (res.result) {
						// console.log(res)
						this.addBook(res.result)
					}
				}
			})
		},
		/* isbn: 书的编号 */
		/* 发请求, async 封装 */
		async addBook(isbn) {
			// console.log(isbn)
			/* 传递给 server/controllers/addbook.js */
			const res = await post('/weapp/addbook', {
				isbn,
				openid: this.userInfo.openId
			})
			showModal('添加成功', `${res.title}添加成功`)
		},
		doLogin() {
			/* [qcloud 获取用户信息 wafer2-client-sdk](https://github.com/tencentyun/wafer-client-sdk/) */
			/* [getStorageSync 获取缓存数据](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html) */
			let user = wx.getStorageSync('userInfo')
			if (!user) {
				if (user) {
					// 第二次登录
					// 或者本地已经有登录态
					// 可使用本函数更新登录态
					qcloud.loginWithCode({
						success: res => {
							console.log(res)
              /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
              wx.setStorageSync('userInfo', res)
              this.userInfo = res
              showSuccess('第二次登录成功')
						},
						fail: err => {
							console.log('第二次登录失败', err)
						}
					})
				} else {
          // 首次登录
          qcloud.setLoginUrl(config.loginUrl)
					qcloud.login({
						success: res => {
              console.log(res)
              /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
              wx.setStorageSync('userInfo', res)
              this.userInfo = res
              showSuccess('登录成功')
						},
						fail: err => {
							console.log('登录失败', err)
						}
					})
				}
			}
		},
		login() {
			/* [qcloud 获取用户信息 wafer2-client-sdk](https://github.com/tencentyun/wafer-client-sdk/) */
			/* [getStorageSync 获取缓存数据](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html) */
			let user = wx.getStorageSync('userInfo')
			if (!user) {
				qcloud.setLoginUrl(config.loginUrl)
				qcloud.login({
					success: userInfo => {
						console.log('登录成功', userInfo)
						// showSuccess('登录成功')
						/* openId 隐藏在 weapp/user 里面 */
						/* 有 openId 但是没返回, 采取下面部分的写法才能获取 */
						/* 如果希望小程序的网络请求包含会话，登录之后使用 request 方法进行网络请求即可 */
						qcloud.request({
							/* 想要使用 optionId 要请求 server/routes/index.js/用户信息接口 */
							url: config.userUrl,
							login: true,
							success: userRes => {
								console.log(userRes)
								/* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
								wx.setStorageSync('userInfo', userRes.data.data)
								this.userInfo = userRes.data.data
								showSuccess('登录成功')
							}
						})
					},
					fail: err => {
						console.log('登录失败', err)
					}
				})
			}
		}
	}
}
</script>

<style lang='scss'>
.container {
	padding: 0 30rpx;
	.userInfo {
		margin-top: 100rpx;
		text-align: center;
		img {
			margin: 20rpx;
			border-radius: 50%;
			width: 150rpx;
			height: 150rpx;
		}
	}
}
</style>
