const CONF = {
  // 上线部署要注释下面的代码 start
  serverHost: 'localhost',
  tunnelServerUrl: '',
  tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // --- 改三个 start ---
  // [账号信息 APPID](https://console.qcloud.com/developer)
  qcloudAppId: '1257291687',
  // [Secretid/SecretKey](https://console.qcloud.com/cam/capi)
  qcloudSecretId: 'AKIDmuDZxO6pTCyncWvWYo4NRalXVVUDRwro',
  // [Secretid/SecretKey](https://console.qcloud.com/cam/capi)
  qcloudSecretKey: 'Bb2V8oAb5iP90z16EObp7RD516EOauBT',
  // --- 改三个 end ---
  wxMessageToken: 'weixinmsgtoken',
  networkTimeout: 30000,
  // 上线部署要注释上面的代码 end

  port: '5757',
  rootPathname: '',

  // 微信小程序 App ID
  appId: '',

  // 微信小程序 App Secret
  appSecret: '',

  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: true,

  /**
   * MySQL 配置，用来存储 session 和用户信息
   * 若使用了腾讯云微信小程序解决方案
   * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
   */
  // create database cAuth
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: '',
    // 上线部署
    // [AppID(小程序ID)](https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=1921737503&lang=zh_CN)
    // pass: 'wxabcaad13aeed9229',
    char: 'utf8mb4'
  },

  cos: {
    /**
     * 地区简称
     * @查看 https://cloud.tencent.com/document/product/436/6224
     */
    region: 'ap-guangzhou',
    // Bucket 名称
    fileBucket: 'qcloudtest',
    // 文件夹
    uploadFolder: ''
  },

  // 微信登录态有效期
  wxLoginExpires: 7200
  // wxMessageToken: 'abcdefgh'
}

module.exports = CONF
