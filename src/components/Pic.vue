<template>
  <a :href='detailUrl'>
    <div class='book-card'>
      <div class='thumb' @click.stop='preview'>
				<!-- [mode](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) -->
        <img class='img' :src='book.image' mode='aspectFit' />
      </div>
      <div class='detail'>
        <div class='row text-primary'>
          <div class='right'>
            {{book.rate}} <Rate :value='book.rate'></Rate>
          </div>
          <div class='left'>
            {{book.title}}
          </div>
        </div>
        <div class='row'>
          <div class='right text-primary'>
            浏览量:{{book.count}}
          </div>
          <div class='left'>
            {{book.author}}
          </div>
        </div>
        <div class='row'>
          <div class='right'>
            {{book.user_info.nickName}}
          </div>
          <div class='left'>
            {{book.publisher}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Rate from '@/components/Rate'

export default {
	components: {
		Rate
	},
	props: ['book'],
	computed: {
		detailUrl() {
			return '/pages/detail/main?id=' + this.book.id
		}
	},
	methods: {
		preview() {
			/* [previewImage](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html) */
			wx.previewImage({
				current: this.book.image,
				urls: [this.book.image]
			})
		}
	}
}
</script>

<style lang='scss' scoped>
.book-card {
	margin: 10rpx 0;
	padding: 10rpx;
	font-size: 28rpx;
	overflow: hidden;

	.thumb {
		float: left;
		margin: 0 auto;
		width: 180rpx;
		height: 180rpx;
		overflow: hidden;

		.img {
			max-width: 100%;
			max-height: 100%;
		}
	}
	.detail {
		margin: 0 0 0 200rpx;

		.row {
			margin: 0 0 6rpx 0;
			line-height: 40rpx;
		}

		.right {
			float: right;
		}

		.left {
			margin: 0 160rpx 0 0;
		}
	}
}
</style>
