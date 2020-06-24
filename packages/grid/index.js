import Grid from './src/grid'
import GridItem from './src/grid-item'

Grid.install = function (Vue) {
  Vue.component(Grid.name, Grid)
  Vue.component(GridItem.name, GridItem)
}

export {
  Grid,
  GridItem
}

export default Grid
