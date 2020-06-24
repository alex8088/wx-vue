import { childMixin } from '../../core/mixin/tab'

export default {
  name: "WxTabItem",
  mixins: [childMixin],
  props: {
    label: String,
    name: String,
    disabled: Boolean
  },
  computed: {
    style() {
      if (this.parent && this.parent.activeColor && this.parent.currentIndex === this.index && !this.disabled) {
        return {
          color: this.parent.activeColor
        }
      }
      return null
    }
  },
  render() {
    if (this.parent)
      return (<div v-show={this.active}>{this.$slots.default}</div>)
  }
}