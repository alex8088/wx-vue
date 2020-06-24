import Tabbar from './src/tabbar'

import TabbarItem from './src/tabbar-item'

Tabbar.install = function (Vue) {
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabbarItem.name, TabbarItem)
}

export {
  Tabbar,
  TabbarItem
}

export default Tabbar