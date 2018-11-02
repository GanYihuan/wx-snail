const Koa = require('koa')
const Router = require('koa-router')
const koaLog = require('./koa-logger')
const app = new Koa()
const router = new Router()

// 定义路由
router.get('/', (ctx, next) => {
  ctx.body = '孙悟空'
})
router.get('/zhu', (ctx, next) => {
  ctx.body = '猪八戒'
})

app.use(koaLog)
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
