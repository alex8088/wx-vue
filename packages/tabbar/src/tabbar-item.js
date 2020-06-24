import { childMixin } from '../../core/mixin/tab'

export default {
  name: "WxTabbarItem",
  mixins: [childMixin],
  props: {
    name: String,
    label: String,
    icon: String,
    activeIcon: String,
    badge: [Number, String]
  },
  computed: {
    style() {
      if (this.parent && this.parent.activeColor && this.parent.currentIndex === this.index) {
        return {
          color: this.parent.activeColor
        }
      }
      return null
    },
    currentIcon() {
      if (this.parent.currentIndex === this.index && this.activeIcon) {
        return this.activeIcon
      }
      return this.icon
    }
  },
  render() {
    if (this.parent && this.active)
      return (this.$slots.default)
  }
}