import routerMixin from "../../core/mixin/router"

export default {
  name: "WxLink",
  mixins: [routerMixin],
  inject: {
    linkGroup: {
      default: false
    }
  },
  props: {
    mini: Boolean,
    to: [String, Object]
  },
  render(h) {
    let css = ['weui-link', { 'weui-link_mini': this.mini }]
    let event = { 'click': this.handleClick }
    if (this.linkGroup) {
      return h('div', { class: ['weui-flex__item'] }, [h('a', { class: css, on: event }, this.$slots.default)])
    } else {
      return h('a', { class: css, on: event }, this.$slots.default)
    }
  }
}