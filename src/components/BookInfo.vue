<template>
  <div class='bookinfo'>
    <div class="thumb">
      <!-- [img](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) -->
      <img class='back' :src="info.image" mode='aspectFill'>
      <img class="img" :src="info.image" mode='aspectFit'>
      <div class="info">
        <div class="title">
          {{info.title}}
        </div>
        <div class="author">
          {{info.author}}
        </div>
      </div>
    </div>
    <div class="detail">
      <img :src="userinfo.image" class='avatar' mode='aspectFit'>
      {{userinfo.name}}
      <div class="right text-primary">
        {{info.rate}}分
        <Rate :value='info.rate'></Rate>
      </div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">
        {{info.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badge" :key='tag' v-for='tag in info.tags'>{{tag}}</div>
    </div>
    <div class="summary">
      <p :key='i' v-for='(sum, i) in info.summary'>{{sum}}</p>
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
			return this.info.user_info || {}
		}
	}
}
</script>

<style lang='scss'>
.bookinfo {
	font-size: 14px;
	.badge {
		display: inline-block;
		margin: 5px;
		padding: 5px;
		border-radius: 10px;
		border: 1px #ea5a49 solid;
		color: #ea5a49;
	}
	.summary {
		margin-top: 10px;
		padding: 0 15px;
		p {
			text-indent: 2em;
			font-size: 14px;
		}
	}
	.right {
		float: right;
	}
	.detail {
		padding: 5px 10px;
		.avatar {
			border-radius: 50%;
			width: 20px;
			height: 20px;
			vertical-align: middle;
		}
	}
	.thumb {
		position: relative;
		overflow: hidden;
		width: 750rpx;
		height: 500rpx;
		.back {
			width: 100%;
			filter: blur(15px);
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
			left: 0;
			top: 330rpx;
			width: 100%;
			text-align: center;
			color: white;
			.title {
				font-size: 20px;
			}
			.author {
				font-size: 14px;
			}
		}
	}
}
</style>
