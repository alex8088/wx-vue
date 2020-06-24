import pickerTpl from "./picker-template"
import pickerMixin from "./picker-mixin"
import dataFormat from "./date-format"
import uuid from "../../core/uuid"
import weui from "../../core/weui"

export default {
  name: "WxDatePicker",
  mixins: [pickerTpl, pickerMixin],
  props: {
    value: String,
    start: {
      type: [Number, String, Date],
      default: 2015
    },
    end: {
      type: [Number, String, Date],
      default: 2025
    },
    cron: {
      type: String,
      default: '* * *'
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    }
  },
  methods: {
    isValid(date) {
      return date !== null && date !== undefined && !isNaN(Date.parse(date))
    },
    setDisplayText() {
      if (this.isValid(this.currentValue)) {
        this.currentText = dataFormat(new Date(this.currentValue), this.format)
      } else {
        this.currentText = ""
      }
    },
    handleClick() {
      this.$el.classList.remove("weui-cell_warn")
      if (this.__disabled()) return
      let defaultValue = []
      let dt = this.isValid(this.currentValue) ? new Date(this.currentValue) : new Date()
      let year = dt.getFullYear()
      let month = dt.getMonth() + 1
      let day = dt.getDate()
      defaultValue.push(year)
      defaultValue.push(month)
      defaultValue.push(day)
      weui.datePicker({
        id: `pd-${uuid.rand()}`,
        start: this.start,
        end: this.end,
        cron: this.cron,
        defaultValue: defaultValue,
        onConfirm: re => {
          this.currentValue = `${re[0].value}/${re[1].value}/${re[2].value}`
          this.currentText = dataFormat(new Date(this.currentValue), this.format)
        }
      })
    }
  }
}