import Collapse from './src/collapse'
import CollapseItem from './src/collapse-item'

Collapse.install = function (Vue) {
  Vue.component(Collapse.name, Collapse)
  Vue.component(CollapseItem.name, CollapseItem)
}

export {
  Collapse,
  CollapseItem
}

export default Collapse