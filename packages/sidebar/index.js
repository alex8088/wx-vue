import Sidebar from './src/sidebar'
import SidebarItem from './src/sidebar-item'

Sidebar.install = function (Vue) {
  Vue.component(Sidebar.name, Sidebar)
  Vue.component(SidebarItem.name, SidebarItem)
}

export {
  Sidebar,
  SidebarItem
}

export default Sidebar