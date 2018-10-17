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

/*
async: Define a function
await: Waiting for an asynchronous execution to end, inside async
Onion model: **Onion model.png**
ctx: package request & response Context
next: Next middleware
app: Launch application
app.use: Is a middleware
*/

app.use(koaLog)

/* 135642 */
app.use(async (ctx, next) => {
  console.log(ctx)
  /* **router.js** replace */
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
