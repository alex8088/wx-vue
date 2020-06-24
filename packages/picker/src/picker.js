import pickerTpl from "./picker-template"
import pickerMixin from "./picker-mixin"
import uuid from "../../core/uuid"
import weui from "../../core/weui"

export default {
  name: "WxPicker",
  mixins: [pickerTpl, pickerMixin],
  props: {
    value: [String, Number, Array],
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    cascadeDepth: {
      type: Number,
      default: 1
    },
    cascadeTextSeparator: {
      type: String,
      default: " "
    }
  },
  methods: {
    findOption(data, value) {
      for (let i = 0, len = data.length; i < len; ++i) {
        if (data[i].value === value) {
          return data[i]
        }
      }
      return null
    },
    setDisplayText() {
      if (
        this.currentValue !== null &&
        this.currentValue !== undefined &&
        this.data &&
        this.data.length > 0
      ) {
        if (
          typeof this.currentValue === "string" ||
          typeof this.currentValue === "number"
        ) {
          let opts = this.data
          for (let i = 0, len = opts.length; i < len; ++i) {
            if (opts[i].value === this.currentValue)
              this.currentText = opts[i].label
          }
        } else {
          let vals = this.currentValue
          let labs = []
          let opts = this.data
          let aval = true
          for (let i = 0, len = vals.length; i < len; ++i) {
            let opt = this.findOption(opts, vals[i])
            if (opt) {
              labs.push(opt.label)
              opts = opt.children
            } else {
              aval = false
              break
            }
          }
          if (aval) this.currentText = labs.join(this.cascadeTextSeparator)
        }
      } else {
        this.currentText = ""
      }
    },
    handleClick() {
      this.$el.classList.remove("weui-cell_warn")
      if (this.__disabled()) return
      if (this.data && this.data.length > 0) {
        let defaultValue =
          typeof this.currentValue === "string" ||
            typeof this.currentValue === "number"
            ? [this.currentValue]
            : this.currentValue
        weui.picker(this.data, {
          id: `p-${uuid.rand()}`,
          depth: this.cascadeDepth,
          defaultValue: defaultValue,
          onConfirm: re => {
            if (re && re.length > 0) {
              let values = []
              let labels = []
              for (let i = 0, len = re.length; i < len; ++i) {
                values.push(re[i].value)
                labels.push(re[i].label)
              }
              this.currentValue = values
              this.currentText = labels.join(this.cascadeTextSeparator)
              this.$emit("select", re)
            }
          }
        })
      }
    }
  }
}