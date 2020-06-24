import DatePicker from '../picker/src/date-picker'

DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker