# imooc-snail

> A Mpvue project

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
* wxabcaad13aeed9229 (蜗牛蜗牛图书 小程序))

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

## 2-2 原生小程序 - 项目目录结构

* static/01-文件目录

## 2-3 原生小程序 - 项目 app.json 配置

* rpx: 微信自带 css 单位

## 2-4 原生小程序 - 自带组件及 API

* [开发 API](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)

## 2-5 原生小程序 - 语法缺点

* 不能使用 npm

## 3-7 mpvue 入门 01

* 安装 mpvue

```console
cnpm install vue -g
vue init mpvue/mpvue-quickstart imooc-snailbook
<!-- 输入 wxabcaad13aeed9229 -->
cnpm install
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

## 7-4 图书录入功能-mysql新建图书表结构

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

## 8-2: show Book data

## 8-3: Rate component

## 8-4: database add User NickName

## 8-5: pull down refresh

## 8-6: pull down reload data

## 8-7

```console
alter table books add column count init default 0;
```

## 8-8: get top swiper data

## 8-9: top swiper finish

```console
mysql:
show create table books
```

## 9-1: get bookinfo, change title

## 9-2: book cover

## 9-3: bookDetail rate, user, publiched

## 9-4: book tags, summary

## 9-5: get phone

## 9-6: get Location

## 9-7: click comment post request

## 9-8: comment back-end interface

## 9-9: comemnt list back-end

## 9-10, 9-11: comment module, share to your friend

## 9-13: format

> package.json lint

## 10-1: comment page show has comment

## 10-2: book list

## 10-3: book list back-end fix
