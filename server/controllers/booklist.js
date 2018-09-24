const { mysql } = require('../qcloud')

/* [data](http://localhost:5757/weapp/booklist) */
module.exports = async ctx => {
  /* .select('*') 默认是一个表 */
  // const books = await mysql('books').select('*')
  // ctx.state.data = {
  //   list: books
  // }

  /* JSON.parse() 字符串转换为 js 对象 */
  // const books = await mysql('books')
  //   .select('books.*', 'cSessionInfo.user_info')
  //   .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
  //   .orderBy('books.id', 'desc')
  // ctx.state.data = {
  //   list: books.map(v => {
  //     const info = JSON.parse(v.user_info)
  //     return Object.assign({}, v, {
  //       user_info: {
  //         nickName: info.nickName
  //       }
  //     })
  //   })
  // }

  /* 前端发过来的 page, openid */
  const { page, openid } = ctx.request.query
  const size = 10
  /* 添加微信名和头像要链表查询 .join */
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
      const info = JSON.parse(v.user_info)
      return Object.assign({}, v, {
        user_info: {
          nickName: info.nickName
        }
      })
    })
  }
}
