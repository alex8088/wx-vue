export default {
  name: "WxFormTips",
  inject: {
    form: {
      default: null
    }
  },
  render(h) {
    if (this.form) {
      return h('div', { class: ['weui-form__tips-area'] }, [h('p', { class: ['weui-form__tips'] }, this.$slots.default)])
    }
    return null
  }
}