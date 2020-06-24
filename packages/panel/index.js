import Panel from './src/panel'
import PanelItem from './src/panel-item'

Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel)
  Vue.component(PanelItem.name, PanelItem)
}

export {
  Panel,
  PanelItem
}

export default Panel