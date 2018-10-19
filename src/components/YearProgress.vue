<template>
  <div class="progressbar">
    <!-- [progress](https://developers.weixin.qq.com/miniprogram/dev/component/progress.html) -->
    <progress :percent='percent' activeColor='#EA5A49'></progress>
    <p>{{year}}已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>

<script>
export default {
	computed: {
		year() {
			return new Date().getFullYear()
		},
		days() {
      let start = new Date()
      /* start: 今年第一天 */
			start.setMonth(0)
			start.setDate(1)
      /* 今天的时间戳减去今年第一天的时间戳, 时间戳为毫秒 */
      let offset = new Date().getTime() - start.getTime()
      /* 毫秒 -> 秒 -> 分 -> 时 -> 天 */
			return parseInt(offset / 1000 / 60 / 60 / 24) + 1
		},
		percent() {
			return (this.days * 100 / this.getDayOfYear()).toFixed(1)
		}
	},
	methods: {
		/* 是否为闰年 */
		isLeapYear() {
			const year = new Date().getFullYear()
			if (year % 400 === 0) {
				return true
			} else if (year % 4 === 0 && year % 100 !== 0) {
				return true
			} else {
				return false
			}
		},
		getDayOfYear() {
			return this.isLeapYear() ? 366 : 365
		}
	}
}
</script>

<style lang='scss'>
.progressbar {
	margin: 20rpx 0 80rpx 0;
	width: 100%;
	text-align: center;

	progress {
		margin: 0 0 20rpx 0;
	}
}
</style>
