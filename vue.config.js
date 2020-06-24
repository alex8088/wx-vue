module.exports = {
  publicPath: '/wxvue/demo/',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
    proxy: {
      '/fileagent': {
        target: 'http://wxvue.xyz/api',
        changeOrigin: true
      }
    }
  }
}