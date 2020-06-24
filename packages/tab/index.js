import Tab from './src/tab'

import TabItem from './src/tab-item'

Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
  Vue.component(TabItem.name, TabItem)
}

export {
  Tab,
  TabItem
}

export default Tab