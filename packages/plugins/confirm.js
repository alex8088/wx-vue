import Vue from 'vue'
import ConfirmComponent from '../confirm'
import { mergeProps } from './util'

let $vm

const initInstance = () => {
  const Confirm = Vue.extend(ConfirmComponent)
  $vm = new Confirm({
    el: document.createElement('div')
  })
  $vm.$on('update:visible', (val) => {
    $vm.visible = val
  })
  document.body.appendChild($vm.$el)
}

const confirm = (msg, options = {}, cb) => {
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

export default confirm