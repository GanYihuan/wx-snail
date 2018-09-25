const { mysql } = require('../qcloud')

module.exports = async ctx => {
  /* 前端发过来的 bookid, openid */
  const { bookid, openid } = ctx.request.query
  const mysqlSelect = mysql('comments')
    .select('comments.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'comments.openid', 'cSessionInfo.open_id')
  let comments
  if (bookid) {
    /* 图书详情页的评论列表 */
    comments = await mysqlSelect.where('bookid', bookid)
  } else if (openid) {
    /* 根据个人的 opid 筛选 */
    comments = await mysqlSelect.where('openid', openid)
  }
  /* 返回 */
  ctx.state.data = {
    list: comments.map(v => {
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        title: info.nickName,
        image: info.avatarUrl
      })
    })
  }
}
