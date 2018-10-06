// function ajax(fn){
//   setTimeout(()=>{
//     console.log('你好')
//     fn()
//   },1000)
// }
/* callback 回调地狱 */
// ajax(()=>{
//   console.log('执行结束')
//   ajax(()=>{
//     ajax(()=>{
//       ajax(()=>{
//       })
//     })
//     console.log('执行结束2')
//   })
// })

function delay(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello' + word)
    }, 2000)
  })
}

// delay('孙悟空')
//   .then(word => {
//     console.log(word)
//     return delay('猪八戒')
//   })
//   .then(word => {
//     console.log(word)
//     return delay('沙悟净')
//   })
//   .then(word => {
//     console.log(word)
//   })
// // .catch() {}

/**
 * async+await 一起使用, 替代上面的 delay 回调
 * async: 定义一个函数
 * await: 等待一个异步执行结束, 必须在 async 里面
 */
async function start() {
  const word1 = await delay('孙悟空')
  console.log(word1)
  const word2 = await delay('猪八戒')
  console.log(word2)
  const word3 = await delay('沙悟净')
  console.log(word3)
}
start()
