<template>
  <div class="container">
    <CommentList
      v-if='userinfo.openId'
      type='user'
      :comments="comments"
    ></CommentList>
    <div v-if='userinfo.openId'>
      <div class="page-title">我的图书</div>
      <Pic
        v-for='book in books'
        :key='book.id'
        :book='book'
      ></Pic>
      <div v-if='!books.length'>暂时还没添加过书，快去添加几本把</div>
    </div>
  </div>
</template>

<script>
import { get } from '@/util'
import CommentList from '@/components/CommentList'
import Pic from '@/components/Pic'

export default {
	components: {
		CommentList,
		Pic
	},
	data() {
		return {
			comments: [],
			books: [],
			userinfo: {}
		}
	},
	methods: {
		init() {
			// [showNavigationBarLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html)
			wx.showNavigationBarLoading()
			this.getComments()
			this.getBooks()
			// [hideNavigationBarLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html)
			wx.hideNavigationBarLoading()
		},
		async getBooks() {
			const books = await get('/weapp/booklist', {
				openid: this.userinfo.openId
			})
			this.books = books.list
		},
		async getComments() {
			const comments = await get('/weapp/commentlist', {
				openid: this.userinfo.openId
			})
			this.comments = comments.list
		}
	},
	// 下拉刷新
	onPullDownRefresh() {
		console.log('下拉刷新')
		this.init()
		wx.stopPullDownRefresh()
	},
	// 显示的时候
	onShow() {
		if (!this.userinfo.openId) {
			let userinfo = wx.getStorageSync('userinfo')
			if (userinfo) {
				this.userinfo = userinfo
				this.init()
			}
		}
	}
}
</script>
