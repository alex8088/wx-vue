import Vue from 'vue'
import LoadiingComponent from '../loading'
import { mergeProps } from './util'

let $vm

const initInstance = () => {
  const Loading = Vue.extend(LoadiingComponent)
  $vm = new Loading({
    el: document.createElement('div')
  })
  document.body.appendChild($vm.$el)
}

const loading = {
  show: (msg) => {
    if (!$vm) initInstance()
    let _options = {
      msg
    }
    mergeProps($vm, _options)

    Vue.nextTick(() => {
      $vm.visible = true
    })
  },
  hide: () => {
    if ($vm) {
      Vue.nextTick(() => {
        $vm.visible = false
      })
    }
  }
}

export default loading