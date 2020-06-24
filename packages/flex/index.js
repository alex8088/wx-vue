import Flex from './src/flex'
import FlexItem from './src/flex-item'

Flex.install = function (Vue) {
  Vue.component(Flex.name, Flex)
  Vue.component(FlexItem.name, FlexItem)
}

export {
  Flex,
  FlexItem
}

export default Flex