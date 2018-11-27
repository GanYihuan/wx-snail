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
