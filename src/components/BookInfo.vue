<template>
  <div class='bookinfo'>
    <div class='thumb'>
      <!-- [img](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) -->
      <img class='back' :src='info.image' mode='aspectFill' />
      <img class='img' :src='info.image' mode='aspectFit' />
      <div class='info'>
        <div class='title'>
          {{info.title}}
        </div>
        <div class='author'>
          {{info.author}}
        </div>
      </div>
    </div>
    <div class='detail'>
      <img class='avatar' :src='userinfo.image' mode='aspectFit' />
      {{userinfo.name}}
      <div class='right text-primary'>
        {{info.rate}}分
        <Rate :value='info.rate'></Rate>
      </div>
    </div>
    <div class='detail'>
      {{info.publisher}}
      <div class='right'>
        {{info.price}}
      </div>
    </div>
    <div class='tags'>
      <div class='badge' v-for='tag in info.tags' :key='tag'>{{tag}}</div>
    </div>
    <div class='summary'>
      <p v-for='(sum, i) in info.summary' :key='i'>{{sum}}</p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'

export default {
	components: {
		Rate
	},
	props: ['info'],
	computed: {
		userinfo() {
      /* .user_info: bookdetail.js */
      /* 如果不存在则为 {} */
			return this.info.user_info || {}
		}
	}
}
</script>

<style lang='scss'>
.bookinfo {
	font-size: 28rpx;

	.thumb {
		position: relative;
		width: 750rpx;
		height: 500rpx;
		overflow: hidden;

		.back {
			width: 100%;
			filter: blur(30rpx);
		}

		.img {
			position: absolute;
			left: 0;
			top: 30rpx;
			width: 100%;
			height: 300rpx;
		}

		.info {
			position: absolute;
			top: 330rpx;
			left: 0;
			width: 100%;
			text-align: center;
			color: #fff;

			.title {
				font-size: 40rpx;
			}

			.author {
				font-size: 28rpx;
			}
		}
	}

	.detail {
		padding: 10rpx 20rpx;

		.avatar {
			border-radius: 50%;
			width: 40rpx;
			height: 40rpx;
			vertical-align: middle;
		}

		.right {
			float: right;
		}
	}

	.badge {
		display: inline-block;
		margin: 10rpx;
		padding: 10rpx;
		border: 2rpx #ea5a49 solid;
		border-radius: 20rpx;
		color: #ea5a49;
	}

	.summary {
		margin: 20rpx 0 0 0;
		padding: 0 30rpx;

		p {
			text-indent: 2em;
			font-size: 28rpx;
		}
	}
}
</style>
