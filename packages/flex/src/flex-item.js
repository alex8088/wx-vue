export default {
  name: 'WxFlexItem',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return h(this.tag, { class: ['weui-flex__item'] }, this.$slots.default)
  }
}