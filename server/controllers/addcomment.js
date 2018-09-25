const { mysql } = require('../qcloud')

module.exports = async ctx => {
  /* 前端发过来的 bookid, comment, openid, location, phone */
  const { bookid, comment, openid, location, phone } = ctx.request.body
  console.log(bookid, comment, openid, location, phone)
  try {
    await mysql('comments').insert({ bookid, comment, openid, location, phone })
    /* 返回 */
    ctx.state.data = {
      msg: 'success'
    }
  } catch (e) {
    /* 返回 */
    ctx.state = {
      code: -1,
      data: {
        msg: '评论失败:' + e.sqlMessage
      }
    }
  }
}
