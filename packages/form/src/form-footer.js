export default {
  name: "WxFormFooter",
  inject: {
    form: {
      default: null
    }
  },
  render(h) {
    if (this.form) {
      return h('div', { class: ['weui-form__extra-area'] }, this.$slots.default)
    }
    return null
  }
}