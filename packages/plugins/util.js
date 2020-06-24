const mergeProps = function ($vm, options) {
  for (let i in $vm.$props) {
    if (i !== 'value') {
      $vm.$props[i] = options[i] || $vm.$options.props[i].default
    }
  }
}

export {
  mergeProps
}