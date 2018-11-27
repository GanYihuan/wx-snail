/* 工具函数库 */
import config from './config'

/* http get 工具函数 获取数据 */
export function get(url, data) {
  return request(url, 'GET', data)
}

export function post(url, data) {
  return request(url, 'POST', data)
}

/* 发起网络请求 */
function request(url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    /* wx.request: 微信自带 API, 发起网络请求 */
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function(res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          /* [showModal](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html) */
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

export function showModal(title, content) {
  /* [showModal](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html) */
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

export function showToast(title, icon) {
  /* [showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html) */
  wx.showToast({
    title: title,
    icon: icon,
    duration: 2000
  })
}
