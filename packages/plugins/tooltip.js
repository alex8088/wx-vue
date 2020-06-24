import Vue from 'vue'
import TooltipComponent from '../tooltip'
import { mergeProps } from './util'

let $vm

const initInstance = () => {
  const Tooltip = Vue.extend(TooltipComponent)
  $vm = new Tooltip({
    el: document.createElement('div')
  })
  $vm.$on('update:visible', (val) => {
    $vm.visible = val
  })
  document.body.appendChild($vm.$el)
}

const tooltip = (msg, time) => {
  if (!$vm) initInstance()
  let _options = {
    msg,
    time
  }
  mergeProps($vm, _options)

  Vue.nextTick(() => {
    $vm.visible = true
  })
}

export default tooltip