# imooc-snail

> 全网首发 mpvue 课程小程序全栈开发

## 程序运行

```console
<!-- 开启数据库 -->
mysql.server start
mysql -u root
<!-- 运行后端服务器 -->
cd server
nvm use 10.0.0
npm run dev
<!-- 运行程序 -->
cd imooc-snail
node -v
nvm use 10.0.0
npm run dev
<!-- 打开微信开发者工具 -->
选择 imooc-snail
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

* user: m15012856094@163.com
* wxc9686cc036184c63 (读书的蜗牛 小程序)
* wxabcaad13aeed9229 (蜗牛蜗牛图书 小程序)

> 管理 node 版本

```console
npm i nvm
nvm ls
<!-- nvm install 8.11.1 -->
nvm install 10.0.0
<!-- nvm use 8.11.1 -->
nvm use 10.0.0
```

## 2-1 小程序帐号和开发工具

* [后台地址](https://mp.weixin.qq.com/) -> 立即注册 -> 小程序 -> 登录
* [小程序信息填写](https://mp.weixin.qq.com/wxopen/initprofile?action=home&lang=zh_CN&token=1921737503)
* 设置 -> 开发设置 -> [AppID](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1921737503&lang=zh_CN) -> 开发者工具 -> 腾讯云开通
* [文档地址](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
* [开发工具下载地址](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) -> AppID
* **app.json** 修改小程序外观

## 2-2 原生小程序 - 项目目录结构

* **static/01-文件目录**
* 微信开发者工具 -> 快速启动模板
* .wxss: 类似 .css, 多了 rpx 单位, 有利于各个平台适配
* wx. 是微信自带 API
* **小程序生命周期.png** vue.js 生命周期取代

## 2-3 原生小程序 - 项目 app.json 配置

* [app.json 配置](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

## 2-4 原生小程序 - 自带组件及 API

* [开发 API](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)

## 2-5 原生小程序 - 语法缺点

> API

* Wx.request 发送请求
* Wx.previewImage 预览图片
* Wx.setStorage|getStorage 本地存储
* Location 地理位置
* ScanCode 扫码
* showToast 显示提示信息
* 设置导航条
* 获取用户信息
* 页面导航 navigateTo, redirectTo, switchTab
* 动画、振动、截屏，亮度
* 音乐、视频、地图、文件
* 加速计 罗盘 wifi nfc 等等

> 小程序自带组件

* 视图, 表单, 媒体

> 语法缺点

* 不能使用 npm，使用第三方包的方式太原始
* 需要为小程序单独开发代码，不能和 web 系统重用
* 开发效率和学习成本（小程序特有的语法）

## 2-6 ES6常用语法

## 3-7 mpvue 入门 01

* [mpvue](https://github.com/Meituan-Dianping/mpvue)
* mpvue: 使用 vue.js 开发小程序的前端框架

```console
cnpm install vue -g
vue init mpvue/mpvue-quickstart imooc-snailbook
<!-- 输入 wxabcaad13aeed9229 -->
npm install
npm run dev
```

## 3-8 mpvue 入门 02 todolist 迁移

## 4-1 koa 入门+中间件入门

* **learn-koa/server.js**

## 4-2 async+await 优雅处理异步

* **learn-koa/server.js**

## 4-3 自己实现 koa-logger 中间件，打印所有请求的耗时

## 4-4, 4-5 koa-router 入门

* **learn-koa/router.js**

## 5-1 腾讯云后台

* [腾讯云 server 下载](https://github.com/tencentyun/wafer2-quickstart-consolejs) **server**

* **project.config.json**

```js
"qcloudRoot": "./server",
```

* 首次上传将除‘智能上传’外全勾上上传, 第二次上传选‘智能上传’
* 开通腾讯云

## 5-2 腾讯云后台代码介绍

## 5-3 腾讯云后台本地开发环境搭建

* **server/config.js**
* [本地搭建微信小程序的开发环境](https://cloud.tencent.com/developer/ask/25171)
* [Secretid/SecretKey](https://console.qcloud.com/cam/capi)
* [账号信息 APPID](https://console.qcloud.com/developer)

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
<!-- refresh console -->
npm install consolemon
npm install nodemon -g
brew install mysql
mysql.server start
mysql -u root
<!-- cAuth: **server/config.js** 里面定义的 -->
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

## 5-4: 原型图

## 5-5, 5-6, 5-7 项目初始化页面-底部导航

## 5-8 代码封装

* **util.js** **config.js**
* 防止报错: 微信开发者工具 -> detail -> Does not verify ...(勾上), 上线时关掉

## 5-10 使用 ESLint 自动规范代码

* npm run lint **package.json**

```json
"lint": "eslint --ext .js,.vue src"
```

<!-- eslint-disable -->

## 6-1 个人中心开发-用户信息获取+展示

> 小程序客户端腾讯云增强 SDK, 会话服务
> SCSS

```console
npm install wafer2-client-sdk -S
npm install sass-loader node-sass -D
```

> 数据库初始化

```console
cd server
npm install
node tools/initdb.js
npm run dev
```

> 数据库操作

```console
mysql.server start
mysql -u root
<!-- mysql: -->
use cAuth
show tables;
select * from cSessionInfo;
create database woniu;
create table test(id int, name varchar(100));
show tables;
select * from test;
```

## 6-2 个人中心-扫码功能开发

## 6-3 个人中心-今年过了多少天组件

## 6-4 个人中心-登录逻辑完善

## 6-5 个人中心-代码完善-eslint 格式化代码

## 7-1 图书录入功能 - mysql 使用

```console
mysql.server start
mysql -u root
show databases;
use cAuth;
show tables;
desc cSeesionInfo;
select * from cSessionInfo;
select create-time, open_id from cSessionInfo;
drop table test;
```

## 7-2 图书录入功能-获取豆瓣图书信息接口

* **server/route/index.js**
* **server/controllers/addbook.js**

## 7-3 图书录入功能-获取豆瓣图书信息接口 2

## 7-4 图书录入功能-mysql 新建图书表结构

* **server/tools/snail.db**

```console
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

```console
select title from books;
```

* **util.js**

## 8-1 图书列表页获取数据

* **server/route/index.js**
* **server/controllers/booklist.js**
* **books/Book.vue**

## 8-2 图书卡片显示数据

* **Pic.vue** replace **Card.vue**

## 8-3 星级显示组件实现

* **components/Rate.vue**
* [vue-tiny-rate](https://github.com/shengxinjing/vue-tiny-rate)

## 8-4 数据库链表查询显示添加人

* **server/controllers/booklist.js**

## 8-5 下拉刷新功能的实现

* **Book.vue**

## 8-6 图书滚动加载功能实现

## 8-7 图书访问次数统计

* **app.json** 在 app.json 的 page 路由按一级、二级的顺序向下排列显示。

```json
"pages": [
  "pages/books/main",
  // 二级路由必须写在一级路由下面
  "pages/detail/main",
],
```

```console
alter table books add column count init default 0;
```

* **server/components/bookdetail.js**

## 8-8 排行榜轮播图数据获取

* **server/components/top.js**

## 8-9 排行榜轮播图实现

## 9-1 获取图书详情，修改标题显示

* **server/components/bookdetail.js**

## 9-2 图书封面显示

* **components/BookInfo.vue**

## 9-3 图书作者评分显示

## 9-4 图书 tag 和简介显示

## 9-5 评论手机型号的获取

* **Detail.vue**

## 9-6 获取地理位置（使用小程序 API 和百度地图 API）

* **Detail.vue**

## 9-7 点击评论发起请求

* **Detail.vue**

## 9-8 评论后台接口实现

* **server/components/addcomment.js**

## 9-9 评论列表实现

* **server/components/commentlist.js**

## 9-10, 9-11 评论模块实现

* **Detail.vue**

## 9-13 代码规范修正

* **package.json**

```console
"scripts": {
  "lint": "eslint --ext .js,.vue src"
},
```

## 10-1 个人已评论列表实现

* **comment.vue**
* **server/components/commentlist.js**

## 10-2 图书列表

## 10-3 图书列表后端修改

* **server/components/commentlist.js**

## 12-2 小程序发布上线流程

> **src/config.jss** 修改, 微信开发者工具里面复制 `Development Environment request Domain Name`: `https://qod21e5e.qcloud.la` > [AppID(小程序 ID)](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1921737503&lang=zh_CN) > **server/config.js** 改两处微信开发者工具 -> 腾讯云 -> 上传测试代码
> [腾讯云](https://mp.weixin.qq.com/wxopen/thirdtools?action=qcloud_tool&token=1921737503&lang=zh_CN)
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
