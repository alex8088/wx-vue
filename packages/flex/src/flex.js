export default {
  name: 'WxFlex',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h) {
    return h(this.tag, { class: ['weui-flex'] }, this.$slots.default)
  }
}