const { mysql } = require('../qcloud')

module.exports = async ctx => {
  /* limit: 长度 */
  const top = await mysql('books')
    .select('id', 'title', 'image', 'count')
    .orderBy('count', 'desc')
    .limit(9)
  /* 返回 */
  ctx.state.data = {
    list: top
  }
}
