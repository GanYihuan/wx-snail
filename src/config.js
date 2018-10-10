/* 配置项, 因为上线要换成 `上线环境部署` */
/* 开发环境部署 */
const host = 'http://localhost:5757'
/* 上线环境部署 */
// const host = 'https://qod21e5e.qcloud.la'
const config = {
  host,
  loginUrl: `${host}/weapp/login`,
  userUrl: `${host}/weapp/user`
}

export default config
