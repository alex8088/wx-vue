import List from './src/list'
import ListItem from './src/list-item'

List.install = function (Vue) {
  Vue.component(List.name, List)
  Vue.component(ListItem.name, ListItem)
}

export {
  List,
  ListItem
}

export default List