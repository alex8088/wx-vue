import Vue from 'vue'
import AlertComponent from '../alert'
import { mergeProps } from './util'

let $vm

const initInstance = () => {
  const Alert = Vue.extend(AlertComponent)
  $vm = new Alert({
    el: document.createElement('div')
  })
  $vm.$on('update:visible', (val) => {
    $vm.visible = val
  })
  document.body.appendChild($vm.$el)
}

const alert = (msg, options = {}, cb) => {
  if (!$vm) initInstance()
  let _options = {
    msg,
    ...options,
    ... typeof cb === 'function' ? { closeFunc: cb } : {},
  }
  mergeProps($vm, _options)

  Vue.nextTick(() => {
    $vm.visible = true
  })
}

export default alert