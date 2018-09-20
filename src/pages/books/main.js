import Vue from 'vue'
import Book from './Book'

const app = new Vue(Book)
app.$mount()

export default{
  config: {
    /* 下拉刷新 */
    enablePullDownRefresh: true
  }
}
