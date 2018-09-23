const https = require('https')
const { mysql } = require('../qcloud')

// 新增图书
// 1. 获取豆瓣信息
// [获取豆瓣信息 无法访问](https://developers.douban.com/wiki/?title=book_v2#get_isbn_book)
// [数据](https://api.douban.com/v2/book/isbn/9787536692930)
// 2. 入库
module.exports = async ctx => {
  /* post 请求在 body 字段里面 */
  const { isbn, openid } = ctx.request.body
  console.log('添加图书', isbn, openid)
  if (isbn && openid) {
    const findRes = await mysql('books')
      .select()
      .where('isbn', isbn)
    if (findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: '图书已存在'
        }
      }
      return
    }
    let url = 'https://api.douban.com/v2/book/isbn/' + isbn
    console.log(url)
    const bookinfo = await getJSON(url)
    const rate = bookinfo.rating.average
    const { title, image, alt, publisher, summary, price } = bookinfo
    // tag: 科幻 1000, 小说 500, ...
    const tags = bookinfo.tags
      .map(v => {
        return `${v.title} ${v.count}`
      })
      .join(',')
    const author = bookinfo.author.join(',')
    console.log({
      rate,
      title,
      image,
      alt,
      publisher,
      summary,
      price,
      tags,
      author
    })
    try {
      await mysql('books').insert({
        isbn,
        openid,
        rate,
        title,
        image,
        alt,
        publisher,
        summary,
        price,
        tags,
        author
      })
      ctx.state.data = {
        title,
        msg: 'success'
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '新增失败:' + e.sqlMessage
        }
      }
    }
  }
}

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let urlData = ''
      /* 获取新数据的时候 */
      res.on('data', data => {
        urlData += data
      })
      /* 获取结束的时候 */
      res.on('end', data => {
        /* 处理成 json */
        const bookinfo = JSON.parse(urlData)
        if (bookinfo.title) {
          resolve(bookinfo)
        }
        reject(bookinfo)
      })
    })
  })
}
