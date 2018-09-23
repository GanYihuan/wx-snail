<template>
  <div>
    <TopSwiper :tops='tops'></TopSwiper>
    <Pic v-for='book in books' :key='book.id' :book='book'></Pic>
    <p class='text-footer' v-if='!more'>
      没有更多数据
    </p>
  </div>
</template>

<script>
/*
[data](http://localhost:5757/weapp/booklist)
35条数据
每次加载10条
0页   0-10
1     10-20
2     20-30（5）
page 当前第几页
没有更多数据
1. page=0 不能显示这条提醒
2. page>0 数据长度<10 停止触底加载
*/
import { get } from '@/util'
import Pic from '@/components/Pic'
import TopSwiper from '@/components/TopSwiper'

export default {
	components: {
		Pic,
		TopSwiper
	},
	data() {
		return {
			books: [],
			page: 0,
			more: true,
			tops: []
		}
	},
	mounted() {
		this.getList(true)
		this.getTop()
	},
	/* [refresh](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) */
	onPullDownRefresh() {
		console.log('下拉')
		this.getList(true)
		this.getTop()
	},
	onReachBottom() {
		if (!this.more) {
			/* 没有更多了 */
			return false
		}
		this.page = this.page + 1
		this.getList()
	},
	methods: {
		async getList(init) {
			if (init) {
				this.page = 0
				this.more = true
			}
			/* [showNavigationBarLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html) */
			wx.showNavigationBarLoading()
			const books = await get('/weapp/booklist', { page: this.page })
			if (books.list.length < 3 && this.page > 0) {
				this.more = false
				console.log('没有更多数据', this.more)
			}
			if (init) {
				/* list: 查看 data */
				this.books = books.list
				/* [stopPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html) */
				wx.stopPullDownRefresh()
			} else {
				/* 下拉刷新，不能直接覆盖 books 而是累加 */
				this.books = this.books.concat(books.list)
			}
			/* [hideNavigationBarLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html) */
			wx.hideNavigationBarLoading()
		},
		/* 获取排行榜 */
		async getTop() {
			const tops = await get('/weapp/top')
			this.tops = tops.list
		}
	}
}
</script>
