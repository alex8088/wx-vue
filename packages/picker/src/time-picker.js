import pickerTpl from "./picker-template"
import pickerMixin from "./picker-mixin"
import dataFormat from "./date-format"
import { getHours, getMins } from "./time"
import uuid from "../../core/uuid"
import weui from "../../core/weui"

export default {
  name: "WxTimePicker",
  mixins: [pickerTpl, pickerMixin],
  props: {
    value: {
      type: String,
      validator: val => {
        return val ? /^(20|21|22|23|[0-1]\d):[0-5]\d$/.test(val) : true
      }
    },
    start: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value < 12
      }
    },
    end: {
      type: Number,
      default: 23,
      validator(value) {
        return value >= 12 && value < 24
      }
    },
    timeSpan: {
      type: Number,
      default: 5,
      validator(value) {
        return [1, 5, 10, 15, 20, 30].indexOf(value) > -1
      }
    },
    format: {
      type: String,
      default: "HH:mm"
    }
  },
  methods: {
    isValid(time) {
      if (time) {
        let hour = new Date(`2020-1-1 ${time}`).getHours()
        return hour >= this.start && hour <= this.end
      } else {
        return false
      }
    },
    setDisplayText() {
      if (this.isValid(this.currentValue)) {
        this.currentText = dataFormat(new Date(`2020-1-1 ${this.currentValue}`), this.format)
      } else {
        this.currentText = ""
      }
    },
    handleClick() {
      this.$el.classList.remove("weui-cell_warn")
      if (this.__disabled()) return
      let defaultValue = []
      if (this.value) {
        let tt = this.value.split(':')
        defaultValue.push(tt[0])
        defaultValue.push(tt[1])
      } else {
        let dt = new Date()
        let curHour = dt.getHours()
        let curMins = 0
        if (curHour < this.start) {
          curHour = this.start
        } else if (curHour > this.end) {
          curHour = this.end
        } else {
          curMins = Math.floor(dt.getMinutes() / this.timeSpan) * this.timeSpan
        }
        defaultValue.push(`${curHour < 10 ? '0' : ''}${curHour}`)
        defaultValue.push(`${curMins < 10 ? '0' : ''}${curMins}`)
      }
      weui.picker(getHours(this.start, this.end), getMins(this.timeSpan), {
        id: `pt-${uuid.rand()}`,
        defaultValue: defaultValue,
        onConfirm: (result) => {
          this.currentValue = `${result[0].value}:${result[1].value}`
          this.currentText = dataFormat(new Date(`2020-1-1 ${this.currentValue}`), this.format)
        }
      })
    }
  }
}