export default {
  name: 'WxLinkGroup',
  provide() {
    return {
      linkGroup: true
    }
  },
  render(h) {
    return h('div', { class: ['weui-links', 'weui-flex'] }, this.$slots.default)
  }
}