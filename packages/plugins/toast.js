import Vue from 'vue'
import ToastComponent from '../toast'
import { mergeProps } from './util'

let $vm

const initInstance = () => {
  const Toast = Vue.extend(ToastComponent)
  $vm = new Toast({
    el: document.createElement('div')
  })
  $vm.$on('update:visible', (val) => {
    $vm.visible = val
  })
  document.body.appendChild($vm.$el)
}

const toast = (msg, options) => {
  if (!$vm) initInstance()
  let _options = {
    msg,
    ...options
  }
  mergeProps($vm, _options)

  Vue.nextTick(() => {
    $vm.visible = true
  })
}

export default toast