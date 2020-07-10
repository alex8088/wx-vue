import Ad from './src/ad'

Ad.install = function (Vue) {
  Vue.component(Ad.name, Ad)
}

export default Ad