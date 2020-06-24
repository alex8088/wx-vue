import ScrollView from './src/scroll-view'

ScrollView.install = function (Vue) {
  Vue.component(ScrollView.name, ScrollView)
}

export default ScrollView