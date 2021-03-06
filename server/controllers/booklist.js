const { mysql } = require('../qcloud')

/* [data](http://localhost:5757/weapp/booklist) */
module.exports = async ctx => {
  /* 前端发过来的 page, openid */
  const { page, openid } = ctx.request.query
  const size = 10
  /* .select('*') 默认是一个表, 链表查询(多个表) */
  /* join -> 和 cS 连接, 如果 b.id = cS.id 则返回该条数据 */
  const mysqlSelect = mysql('books')
    .select('books.*', 'cSessionInfo.user_info')
    .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
    .orderBy('books.id', 'desc')
  let books
  if (openid) {
    /* 根据 opid 过滤 */
    books = await mysqlSelect.where('books.openid', openid)
  } else {
    /* 全部图书 分页 */
    /* offset: 起点 */
    /* limit: 长度 */
    books = await mysqlSelect.limit(size).offset(Number(page) * size)
  }
  /* 返回 */
  ctx.state.data = {
    /* list: 查看 data */
    list: books.map(v => {
      /* JSON.parse() string 转换为 json */
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        user_info: {
          nickName: info.nickName
        }
      })
    })
  }
}
