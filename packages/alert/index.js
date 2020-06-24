import Alert from './src/alert'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert