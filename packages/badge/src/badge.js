export default {
  name: 'WxBadge',
  render(h) {
    return h('span', { class: ['weui-badge', { 'weui-badge_dot': !this.$slots.default }] }, this.$slots.default)
  }
}