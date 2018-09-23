const Koa = require('koa')
const app = new Koa()
const koaLog = require('./koa-logger')

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

// Onion model: **洋葱模型.png**
// ctx: 封装了 request response 的上下文
// next: 下一个中间件
// app: 启动应用
// app.use: 是一个中间件

app.use(koaLog)

// 135642
app.use(async (ctx, next) => {
  console.log(ctx)
  // **router.js** 替代下面
  if (ctx.request.url === '/sun') {
    ctx.body = '孙悟空'
  } else if (ctx.request.url === '/zhu') {
    ctx.body = '猪八戒'
  } else {
    ctx.body = '1'
  }
  await next()
  ctx.body += '2'
})

app.use(async (ctx, next) => {
  ctx.body += '3'
  await delay()
  await next()
  ctx.body += '4'
})

app.use(async (ctx, next) => {
  ctx.body += '5'
  await next()
  ctx.body += '6'
})

app.listen(3000)
