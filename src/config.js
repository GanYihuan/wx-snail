// 配置项
// 开发环境部署
// const host = 'http://localhost:5757'
// 上线环境部署
const host = 'https://qod21e5e.qcloud.la'
const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}

export default config
