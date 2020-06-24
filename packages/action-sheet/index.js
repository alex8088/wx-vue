import ActionSheet from './src/action-sheet'
import ActionSheetItem from './src/action-sheet-item'

ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet)
  Vue.component(ActionSheetItem.name, ActionSheetItem)
}

export {
  ActionSheet,
  ActionSheetItem
}

export default ActionSheet