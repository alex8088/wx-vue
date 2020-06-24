import NavigationView from './src/navigation-view'

NavigationView.install = function (Vue) {
  Vue.component(NavigationView.name, NavigationView)
}

export default NavigationView