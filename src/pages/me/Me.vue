<template>
  <div class='container'>
    <div class='userInfo'>
      <img :src='userInfo.avatarUrl' alt="userInfo.avatarUrl">
      <p>{{userInfo.nickName}}</p>
    </div>
		<!-- <open-data class='multi-hp-avatar' type='userAvatarUrl'></open-data> -->
		<!-- <open-data class='multi-hp-nickname' type='userNickName'></open-data> -->
    <YearProgress></YearProgress>
    <button 
      v-if='userInfo.openId'
      class='btn'
      @click='scanBook'
    >
      添加图书
    </button>
		<button 
      v-else
      open-type='getuserInfo'
      lang='zh_CN'
      class='btn'
      @getuserInfo='login'
    >
      点击登录
    </button> 
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import YearProgress from '@/components/YearProgress'
import { showSuccess, post, showModal } from '@/util'
import config from '@/config'

export default {
	components: {
		YearProgress
	},
	data() {
		return {
			userInfo: {
				avatarUrl: '../../../static/img/unlogin.png',
				nickName: ''
			}
		}
	},
	methods: {
		/* 跳转到该页面就自动执行 */
		onShow() {
			let userInfo = wx.getStorageSync('userInfo')
			// console.log([userInfo])
			if (userInfo) {
				this.userInfo = userInfo
			}
			// console.log(this.userInfo)
		},
		/* 扫码 */
		scanBook() {
      /* 扫码 */
			wx.scanCode({
				success: res => {
					if (res.result) {
						this.addBook(res.result)
					}
				}
			})
		},
		async addBook(isbn) {
			console.log(isbn)
			const res = await post('/weapp/addbook', {
				isbn,
				openid: this.userInfo.openId
			})
			showModal('添加成功', `${res.title}添加成功`)
		},
		login() {
      /* 登录可以获取用户信息 */
			/* 获取缓存数据 */
			let user = wx.getStorageSync('userInfo')
			const self = this
			if (!user) {
				qcloud.setLoginUrl(config.loginUrl)
				qcloud.login({
					success: function(userInfo) {
						qcloud.request({
							url: config.userUrl,
							login: true,
							success(userRes) {
                showSuccess('登录成功')
                /* 数据缓存 */
								wx.setStorageSync('userInfo', userRes.data.data)
								self.userInfo = userRes.data.data
							}
						})
					},
					fail: function(err) {
						console.log('登录失败', err)
					}
				})
			}
		}
  },
  /* 跳转到该页面就自动执行 */
	onShow() {
		// console.log(123)
		let userInfo = wx.getStorageSync('userInfo')
		// console.log([userInfo])
		if (userInfo) {
			this.userInfo = userInfo
		}
		// console.log(this.userInfo)
	}
}
</script>

<style lang='scss'>
.container {
	padding: 0 30rpx;
}
.userInfo {
	margin-top: 100rpx;
	text-align: center;
	img {
		width: 150rpx;
		height: 150rpx;
		margin: 20rpx;
		border-radius: 50%;
	}
}
</style>