import Vue from 'vue'
import Book from './Book'

const app = new Vue(Book)
app.$mount()

export default {
  config: {
    /* 下拉刷新 */
    /* [refresh](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE) */
    enablePullDownRefresh: true
  }
}
