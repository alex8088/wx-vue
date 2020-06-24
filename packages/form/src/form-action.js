export default {
  name: "WxFormAction",
  inject: {
    form: {
      default: null
    }
  },
  render(h) {
    if (this.form) {
      return h('div', { class: ['weui-form__opr-area'] }, this.$slots.default)
    }
    return null
  }
}