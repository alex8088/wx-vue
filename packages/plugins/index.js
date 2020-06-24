import Vue from 'vue'

import Alert from './alert'
import Confirm from './confirm'
import Toast from './toast'
import Loading from './loading'
import Tooltip from './tooltip'

const install = function () {
  Vue.prototype.$alert = Alert
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$toast = Toast
  Vue.prototype.$loading = Loading
  Vue.prototype.$tooltip = Tooltip
}

export default {
  install,
  Alert,
  Confirm,
  Toast,
  Loading,
  Tooltip
}