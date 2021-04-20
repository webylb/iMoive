const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/dbApi', {
      target: 'https://movie.douban.com/',
      changeOrigin: true,
      pathRewrite: {'^/dbApi': ''}
    }),
    proxy('/dyApi', {
      target: 'https://admin.dyboke.cn/api',
      changeOrigin: true,
      pathRewrite: {'^/dyApi': ''}
    })
  )
}