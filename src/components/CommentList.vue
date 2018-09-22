<template>
  <div class="comment-list">
    <div class="page-title" v-if='comments.length'>
      评论
    </div>
    <div
      class="comment"
      v-for='comment in comments'
      :key='comment.id'
      @click='handleClick(comment)'
    >
      <div class="user">
        <div class="inline">
          <img
            class="avatar"
            mode='aspectFit'
            :src="comment.image"
          >
          {{comment.title}}
        </div>
        <div class="right">
          {{comment.location||'未知地点'}}
          <span class="text-primary">
            --
          </span>
          {{comment.phone||'未知型号'}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ['comments', 'type'],
	methods: {
		handleClick(comment) {
			if (this.type === 'user') {
        // [navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)
				wx.navigateTo({
					url: '/pages/detail/main?id=' + comment.bookid
				})
			}
		}
	}
}
</script>

<style lang='scss'>
.comment-list {
	background: #eee;
	font-size: 14px;
	.comment {
		margin-bottom: 10px;
		padding: 5px 20px;
		background: #fff;
		.content {
			margin: 10px 0;
		}
		.user {
			.inline {
				display: inline;
				.avatar {
					width: 20px;
					height: 20px;
					border-radius: 50%;
				}
			}
		}
	}
}
</style>
