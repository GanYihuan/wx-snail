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
      <img class='avatar' :src="userinfo.image" mode='aspectFit'>
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
      <div class="badge" v-for='tag in info.tags' :key='tag'>{{tag}}</div>
    </div>
    <div class="summary">
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
		border: 1px #ea5a49 solid;
		border-radius: 10px;
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
		width: 750rpx;
		height: 500rpx;
		overflow: hidden;
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
			color: #fff;
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
