<template>
  <div>
    <!-- <TopSwiper :tops='tops'></TopSwiper> -->
    <!-- <Card v-for='book in books' :key='book.id' :book='book'></Card> -->
    <!-- <p class='text-footer' v-if='!more'>
      没有更多数据
    </p> -->
    <div v-for='book in books' :key='book.id'>{{book.title}}</div>
  </div>
</template>

<script>
// [data](http://localhost:5757/weapp/booklist)
// 35条数据
// 每次加载10条
// 0页   0-10
// 1     10-20
// 2     20-30（5）
// page 当前第几页
// 没有更多数据
// 1. page=0 不能显示这条提醒
// 2. page>0 数据长度<10 停止触底加载
import { get } from '@/util'
// import Card from '@/components/Card'
// import TopSwiper from '@/components/TopSwiper'

export default {
	// components: {
	// 	Card,
	// 	TopSwiper
	// },
	data() {
		return {
			books: []
			// page: 0,
			// more: true,
			// tops: []
		}
	},
	mounted() {
		this.getList()
	},
	methods: {
		async getList(init) {
			const books = await get('/weapp/booklist')
			this.books = books.list
		}
	}
}
</script>
