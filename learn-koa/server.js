const Koa = require('koa')
const app = new Koa()

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

// Onion model
// 135642
app.use(async (ctx, next) => {
  ctx.body = '1'
  // Next middleware
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
