import { childMixin } from '../../core/mixin/tab'

export default {
  name: "WxSidebarItem",
  mixins: [childMixin],
  props: {
    label: String,
    name: String,
    disabled: Boolean
  },
  render() {
    if (this.parent)
      return (<div v-show={this.active}>{this.$slots.default}</div>)
  }
}