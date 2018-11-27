# imooc-snail

> 全网首发 mpvue 课程小程序全栈开发

## 运行界面

![图书界面](http://phkkwov7c.bkt.clouddn.com/%E5%9B%BE%E4%B9%A6%E7%95%8C%E9%9D%A2.png)
![图书详情界面](http://phkkwov7c.bkt.clouddn.com/%E5%9B%BE%E4%B9%A6%E8%AF%A6%E6%83%85%E7%95%8C%E9%9D%A2.png)
![评论界面](http://phkkwov7c.bkt.clouddn.com/%E8%AF%84%E8%AE%BA%E7%95%8C%E9%9D%A2.png)
![登录界面](http://phkkwov7c.bkt.clouddn.com/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2.png)

## run program

```console
<!-- control node version -->
npm i nvm
nvm i 10.0.0
nvm use 10.0.0
<!-- open mysql -->
brew install mysql
mysql.server start
<!-- mysql -u user root -p pass -->
<!-- no pass -->
mysql -u root
<!-- run back-end -->
imooc-snail> cd server
nvm use 10.0.0
npm run dev
<!-- run front-end -->
cd imooc-snail
nvm use 10.0.0
npm run dev
<!-- open `微信开发者工具` -->
select imooc-snail
input: [AppID: wxabcaad13aeed9229 蜗牛蜗牛图书 小程序](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1921737503&lang=zh_CN)
```

> cSessionInfo: mysql save userInfo
> books: books structure
> [data](http://localhost:5757/weapp/booklist)
> 蜗牛蜗牛图书:

## 2-1 小程序帐号和开发工具

* [小程序后台](https://mp.weixin.qq.com/)
* 设置 -> 开发设置 -> [AppID](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1921737503&lang=zh_CN)
* 设置 -> 第三方服务 -> 腾讯云开通
* [文档地址](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
* [开发工具下载地址](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
* **app.json** Modify the appearance of the applets

## 2-2 原生小程序 - 项目目录结构

* **static/01-文件目录**
* 微信开发者工具 -> 快速启动模板
* .wxss: similar .css, rpx: Conducive to adapt to each platform
* wx. 微信 API
* **static/02-小程序生命周期.png** vue.js lifeCircle

## 2-3 原生小程序 - 项目 app.json 配置

* [app.json 配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

## 2-4 原生小程序 - 自带组件及 API

* [开发 API](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)

## 2-5 原生小程序 - 语法缺点

> 开发 API

* Wx.request 发送请求
* Wx.previewImage 预览图片
* Wx.setStorage|getStorage 本地存储
* 页面导航 navigateTo, redirectTo, switchTab
* Location 地理位置
* ScanCode 扫码
* showToast 显示提示信息
* 设置导航条
* 获取用户信息
* 动画、振动、截屏，亮度
* 音乐、视频、地图、文件
* 加速计 罗盘 wifi nfc 等等

> 小程序自带组件

* 视图, 表单, 媒体

> 语法缺点

* 不能使用 npm
* 需要为小程序单独开发代码，不能和 web 系统重用

## 3-7 mpvue 环境

* [mpvue](https://github.com/Meituan-Dianping/mpvue)
* mpvue: use vue.js Developing a front-end framework for applets

```console
nvm use 10.0.0
npm i vue -g
vue init mpvue/mpvue-quickstart imooc-snailbook
<!-- input APPID: wxabcaad13aeed9229 -->
npm install
npm run dev
```

## 4-1, 4-2, koa 入门+中间件入门, async+await 处理异步

* **learn-koa/server.js**

```console
npm i koa -S
server> node server.js
```

## 4-3 自己实现 koa-logger 中间件，打印所有请求的耗时

* **learn-koa/koa-logger.js**

## 4-4, 4-5, koa 路由, koa-router 入门

* **learn-koa/server.js**
* **learn-koa/router.js**

```console
npm i koa-router -S
```

## 5-1 腾讯云后台

* [腾讯云 server download](https://github.com/tencentyun/wafer2-quickstart-nodejs)
* **project.config.json**

```js
"qcloudRoot": "./server/",
```

* upload -> 首次上传将除‘智能上传’外全勾上上传, 第二次上传选‘智能上传’
* 开通腾讯云

## 5-2 腾讯云后台代码介绍

* **server/routes/index.js**
* **server/controllers/demo.js**

## 5-3 腾讯云后台本地开发环境搭建

* [本地搭建微信小程序的开发环境](https://cloud.tencent.com/developer/ask/25171)
* [Secretid/SecretKey](https://console.qcloud.com/cam/capi)
* [账号信息 APPID](https://console.qcloud.com/developer)
* **server/config.js**

```js
// --- 改三个 start ---
// https://console.qcloud.com/developer
qcloudAppId: '1257291687',
// https://console.qcloud.com/cam/capi
qcloudSecretId: 'AKIDmuDZxO6pTCyncWvWYo4NRalXVVUDRwro',
// https://console.qcloud.com/cam/capi
qcloudSecretKey: 'Bb2V8oAb5iP90z16EObp7RD516EOauBT',
// --- 改三个 end ---
```

```console
<!-- refresh node -->
npm install nodemon -g
brew install mysql
<!-- open mysql -->
mysql.server start
<!-- -p password -->
mysql -u root
<!-- cAuth: **server/config.js** defined -->
mysql> create database cAuth;
```

* run server

```console
cd server
npm install
node tools/initdb.js
npm run dev
```

* [运行测试 demo](http://localhost:5757/weapp/demo)

## 5-5, 5-6, 5-7 项目初始化页面-底部导航

* **static/img**
* **app.json** [页面设置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

## 5-8 代码封装

* **util.js**
* **config.js**
* **App.vue**
* (域名, https, 80), 防止报错: 微信开发者工具 -> detail -> Does not verify ...(勾上), 上线时关掉

## 5-10 使用 ESLint 自动规范代码

* **package.json**

```json
"lint": "eslint --ext .js,.vue src"
```

```console
npm run lint
```

<!-- eslint-disable -->

## 6-1 个人中心开发-用户信息获取+展示

* 小程序客户端腾讯云增强 SDK, 会话服务 [获取用户信息 wafer2-client-sdk](https://github.com/tencentyun/wafer-client-sdk/)
* **App.vue** 获取用户信息后数据会储存到数据库里 cSessionInfo

```console
npm i wafer2-client-sdk -S
npm i sass-loader node-sass -D
```

```console
<!-- run mysql -->
mysql.server start
mysql -u root

<!-- run server -->
cd server
npm i
node tools/initdb.js
npm run dev

<!-- 执行 wafer2-client-sdk 查看数据库里保存的获取用户信息 -->
mysql> use cAuth;
mysql> show tables;
mysql> select * from cSessionInfo;

<!-- mysql 基础操作  -->
mysql> create database woniu;
mysql> create table test(id int, name varchar(100));
mysql> show tables;
mysql> select * from test;
```

* 储存信息到缓存中 `wx.setStorageSync()`
* 从缓存中获取储存信息 `wx.getStorageSync()`
* 显示提示框 `wx.showToast()`
* 显示模块框 `wx.showModal()`

## 6-2 个人中心-扫码功能开发

* **pages/Me.vue**
* `wx.scanCode({})`

## 6-3 个人中心-今年过了多少天组件

* **components/YearProgress.vue**
* 时间处理

## 6-4, 6-5 个人中心-登录逻辑完善, eslint 格式化代码

* **pages/Me.vue**
* 修复 **App.vue** -> bug!
* `wafer2-client-sdk` 应用会话功能
* `npm run lint`

## 7-1 图书录入功能 - mysql 使用

```console
<!-- start mysql -->
mysql.server start
<!-- -p password -->
mysql -u root

<!-- mysql operation -->
mysql> show databases;
mysql> use cAuth;
mysql> show tables;
mysql> desc cSeesionInfo;
mysql> select * from cSessionInfo;
mysql> select create-time, open_id from cSessionInfo;
mysql> drop table test;
```

## 7-2, 7-3 图书录入功能-获取豆瓣图书信息接口

* **pages/me/Me.vue**
* **server/route/index.js**
* **server/controllers/addbook.js**
* 前端发送参数到后端
* server/controllers/addbook.js/getJSON() 异步处理数据
* 处理豆瓣图书数据
* array -> string

## 7-4 图书录入功能-mysql 新建图书表结构

* **server/tools/snail.sql**

```console
mysql>
CREATE TABLE books (
  id int(11) NOT NULL AUTO_INCREMENT,
  isbn varchar(20) NOT NULL,
  openid varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  image varchar(100) NOT NULL,
  alt varchar(100) NOT NULL,
  publisher varchar(100) NOT NULL,
  summary varchar(1000) NOT NULL,
  price varchar(100) DEFAULT NULL,
  rate float DEFAULT NULL,
  tags varchar(100) DEFAULT NULL,
  author varchar(100) DEFAULT NULL,
  count int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
```

## 7-5 图书录入功能-添加图书功能完成

* **server/config.js** mysql 数据库名称
* **util.js** `wx.showModel()`
* **server/controllers/addbook.js**
* `const { mysql } = require('../qcloud')` 使用, 豆瓣图书数据添加到 books 数据库中
* 防止重复添加图书

## 8-1 图书列表页获取数据

* **server/route/index.js**
* **server/controllers/booklist.js**
* **books/Book.vue**
* 获取 books 数据库里面的内容显示在前端里面

## 8-2 图书卡片显示数据

* **Pic.vue**
* 布局

## 8-3 星级显示组件实现

* **components/Rate.vue**
* [vue-tiny-rate](https://github.com/shengxinjing/vue-tiny-rate)

## 8-4 数据库链表查询显示添加人

* **server/controllers/booklist.js**
* mysql 连表查询

## 8-5 下拉刷新功能的实现

* **books/main.js**
* **Book.vue**
* **app.json** `"enablePullDownRefresh": true,` `onPullDownRefresh()`
* `wx.showNavigationBarLoading()`
* `wx.stopPullDownRefresh()`
* `wx.hideNavigationBarLoading()`

## 8-6 图书滚动加载功能实现

* **server/controllers/booklist.js**
* **Book.vue**
* 查询数据, qcloud 的使用, 多种情况的考虑, 逻辑强

## 8-7 图书访问次数统计

* 组件间传递参数
* **server/components/bookdetail.js** 访问后累加访问次数
* **app.json** 在 app.json 的 page 路由按一级、二级的顺序向下排列显示

```console
mysql> alter table books add column count init default 0;
```

## 8-8 排行榜轮播图数据获取

* **server/components/top.js** 获取部分图书数据, 按照浏览数量来排序, 作为轮播图数据

## 8-9 排行榜轮播图实现

* **components/TopSwiper.vue**
* `<swiper></swiper>` `<swiper-item></swiper-item>`
* `wx.navigateTo()`
* `wx.previewImage()`

## 9-1 获取图书详情，修改标题显示

* **server/components/bookdetail.js** 返回图书详情数据
* `wx.setNavigationBarTitle()`
* 评论功能需要微信企业号

## 9-2 图书封面显示

* **components/BookInfo.vue**
* css

## 9-3 图书作者评分显示

* **components/BookInfo.vue**
* **server/controllers/bookdetail.js**
* 后端数据分割处理

## 9-4 图书 tag 和简介显示

* **components/BookInfo.vue**
* **server/controllers/bookdetail.js**
* 后端数据分割处理
* css

## 9-5 评论手机型号的获取

* **Detail.vue**
* `wx.getSystemInfoSync()`

## 9-6 获取地理位置（使用小程序 API 和百度地图 API）

* **Detail.vue**
* 百度地图使用, 转换经纬度为固定数值
* `wx.getLocation()`

## 9-7, 9-8 点击评论发起请求, 评论后台接口实现

* **Detail.vue**
* **server/components/addcomment.js** 添加数据到数据库中
* **server/tools/snail.sql**

## 9-9, 9-10, 9-11 评论列表实现, 评论模块实现

* **server/controllers/commentlist.js**
* **Detail.vue**
* **src/components/CommentList.vue**

## 9-13 代码规范修正

* **package.json**

```console
"scripts": {
  "lint": "eslint --ext .js,.vue src"
},
```

## 10-1, 10-2 个人已评论列表实现, 图书列表

* **comment.vue**
* **server/components/commentlist.js**

## 10-3 图书列表后端修改

* **server/components/commentlist.js**

## 12-2 小程序发布上线流程

* **src/config.js** 修改`host`, 微信开发者工具里面复制 `Development Environment request Domain Name`: `https://qod21e5e.qcloud.la`
* [AppID(小程序 ID)](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1921737503&lang=zh_CN)
* **server/config.js** 改两处
* 微信工具 -> 上传测试代码 -> 除'智能上传'全打钩,登录小程序管理后台 -> 开发管理 -> 开发版本 就可以找到刚提交上传的版本
  > [腾讯云](https://mp.weixin.qq.com/wxopen/thirdtools?action=qcloud_tool&token=1921737503&lang=zh_CN) 刷新
  > mysql 客户端, 用户名: root, 密码: AppID

```console
<!-- 内容复制到 mysql 客户端, cAuth -> SQL 里面 -->
mysql> show create table books;
<!-- 内容 -->
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(20) NOT NULL,
  `openid` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `price` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `tags` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8
<!-- 内容复制到 mysql 客户端, cAuth -> SQL 里面 -->
mysql> show create table comments;
<!-- 内容 -->
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(100) NOT NULL,
  `bookid` varchar(100) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8
```
