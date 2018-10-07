<template>
  <div class='swiper'>
    <swiper
      indicator-color='#EA5A49'
      :indicator-dots='true'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'
    >
      <div v-for='(top, imgindex) in imgUrls' :key='imgindex'>
        <swiper-item>
          <!-- [image](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) -->
          <img
            class='slide-image'
            mode='aspectFit'
            v-for='img in top'
            :key='img.id'
            :src='img.image'
            @click='bookDetail(img)'
          >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
/* [swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html) */
export default {
	props: ['tops'],
	computed: {
		imgUrls() {
			/* 如果通用 请用 chunk 函数比如 lodash 的 chunk 方法 */
			/* Chunk convers arrays like [1,2,3,4,5] into arrays of arrays like[[1,2],[3,4],[5]] */
			let res = this.tops
			console.log([res.slice(0, 3), res.slice(3, 6), res.slice(6)])
			return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
		}
	},
	methods: {
		bookDetail(item) {
      /* [navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html) */
			wx.navigateTo({
				url: '/pages/detail/main?id=' + item.id
			})
		}
	}
}
</script>

<style lang='scss'>
.swiper {
	margin-top: 10rpx;
	.slide-image {
		width: 33%;
		height: 250rpx;
	}
}
</style>
