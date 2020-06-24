import Badge from './src/badge'

Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge