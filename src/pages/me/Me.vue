<template>
  <div class="container">
    <!-- <p>{{userInfo.openId}}</p> -->
    <div class="userInfo">
      <img class="img" :src="userInfo.avatarUrl" alt="userInfo.avatarUrl">
      <p>{{userInfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button class="btn" v-if="userInfo.openId" @click="scanBook">添加图书</button>
    <button class="btn" v-else open-type="getUserInfo" lang="zh_CN" @getuserinfo="login">点击登录</button>
  </div>
</template>

<script>
import qcloud from "wafer2-client-sdk";
import { showToast, post, showModal } from '@/util'
import config from "@/config";
import YearProgress from "@/components/YearProgress";

export default {
  components: {
    YearProgress
  },
  data() {
    return {
      userInfo: {
        avatarUrl: "../../../static/img/unlogin.png",
        nickName: "未登录"
      }
    };
  },
  /* 跳转到该页面就自动执行, onShow 是微信 API 的生命周期 */
  onShow() {
    wx.showShareMenu();
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.userInfo = userInfo;
    }
  },
  methods: {
    scanBook() {
      /* [scanCode](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html) */
      wx.scanCode({
        success: res => {
          if (res.result) {
            // console.log(res)
            this.addBook(res.result);
          }
        }
      });
    },
    /* isbn: 书的编号 */
    /* 发请求, async 封装 */
    async addBook(isbn) {
      // console.log(isbn)
      /* 传递给 server/controllers/addbook.js */
      const res = await post("/weapp/addbook", {
        isbn,
        openid: this.userInfo.openId
      });
      showModal("添加成功", `${res.title}添加成功`);
    },
    loginSuccess(res) {
      showToast("登录成功", "success");
      /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
      wx.setStorageSync("userInfo", res);
      this.userInfo = res;
      // this.hasBooks(true);
    },
    login() {
      showToast("登录中", "loading");
      qcloud.setLoginUrl(config.loginUrl);
      const session = qcloud.Session.get();
      if (session) {
        qcloud.loginWithCode({
          success: res => {
            console.log("第二次登录成功", res);
            this.loginSuccess(res);
          },
          fail: err => {
            console.log("第二次登录失败", err);
          }
        });
      } else {
        qcloud.login({
          success: res => {
            console.log("登录成功", res);
            this.loginSuccess(res);
          },
          fail: err => {
            console.log("登录失败", err);
          }
        });
      }
    },
    doLogin() {
      /* [qcloud 获取用户信息 wafer2-client-sdk](https://github.com/tencentyun/wafer-client-sdk/) */
      /* [getStorageSync 获取缓存数据](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html) */
      let user = wx.getStorageSync("userInfo");
      if (!user) {
        if (user) {
          // 第二次登录
          // 或者本地已经有登录态
          // 可使用本函数更新登录态
          qcloud.loginWithCode({
            success: res => {
              qcloud.request({
                /* 想要使用 optionId 要请求 server/routes/index.js/用户信息接口 */
                url: config.userUrl,
                login: true,
                success: userRes => {
                  console.log(userRes);
                  /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
                  wx.setStorageSync("userInfo", userRes.data.data);
                  this.userInfo = userRes.data.data;
                  showSuccess("登录成功");
                }
              });
              // console.log(res)
              // /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
              // wx.setStorageSync('userInfo', res)
              // this.userInfo = res
              // showSuccess('第二次登录成功')
            },
            fail: err => {
              console.log("第二次登录失败", err);
            }
          });
        } else {
          // 首次登录
          qcloud.setLoginUrl(config.loginUrl);
          qcloud.login({
            success: res => {
              qcloud.request({
                /* 想要使用 optionId 要请求 server/routes/index.js/用户信息接口 */
                url: config.userUrl,
                login: true,
                success: userRes => {
                  console.log(userRes);
                  /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
                  wx.setStorageSync("userInfo", userRes.data.data);
                  this.userInfo = userRes.data.data;
                  showSuccess("登录成功");
                }
              });
              // console.log(res)
              // /* [setStorageSync 数据缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html) */
              // wx.setStorageSync('userInfo', res)
              // this.userInfo = res
              // showSuccess('登录成功')
            },
            fail: err => {
              console.log("登录失败", err);
            }
          });
        }
      }
    }
  }
};
</script>

<style lang='scss'>
.container {
  padding: 0 30rpx;
  .userInfo {
    margin: 100rpx 0 0 0;
    text-align: center;
    .img {
      margin: 20rpx;
      border-radius: 50%;
      width: 150rpx;
      height: 150rpx;
    }
  }
  .btn {
    margin: 100rpx 0;
    border-radius: 100rpx;
  }
}
</style>
