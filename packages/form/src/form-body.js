export default {
  name: "WxFormBody",
  inject: {
    form: {
      default: null
    }
  },
  render(h) {
    if (this.form) {
      return h('div', { class: ['weui-form__control-area'] }, this.$slots.default)
    }
    return null
  }
}