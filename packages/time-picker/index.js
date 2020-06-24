import TimePicker from '../picker/src/time-picker'

TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker)
}

export default TimePicker