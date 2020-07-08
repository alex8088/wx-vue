import { parentMixin } from "../../core/mixin/tab"

export default {
  name: "WxSidebar",
  mixins: [parentMixin],
  props: {
    lineWidth: {
      type: Number,
      default: 4
    },
    lineColor: String,
  },
  methods: {
    scrollToActiveTabItem() {
      const $bar = this.$refs.bar
      if ($bar.scrollHeight > $bar.clientHeight) {
        const $el = this.$refs[`tab-item-${this.currentIndex}`]
        const halfOffsetHeight = ($bar.offsetHeight - $el.offsetHeight) / 2
        let count = 0
        const duration = 15
        const from = $bar.scrollTop
        const to = halfOffsetHeight < $el.offsetTop ? $el.offsetTop - halfOffsetHeight : 0
        const raf = () => {
          $bar.scrollTop += (to - from) / duration
          if (++count < duration) window.requestAnimationFrame(raf)
        }
        raf()
      }
    },
    handleClick(tabItem) {
      if (!tabItem.disabled) {
        this.currentIndex = tabItem.index
        this.$emit("input", tabItem.index)
        this.$emit("change", tabItem.index)
      }
    }
  },
  watch: {
    currentIndex() {
      this.scrollToActiveTabItem()
    }
  },
  render() {
    const items = (
      this.children.map(item => (
        <div class={['weui-sidebar__item',
          { 'weui-sidebar__item_on': item.active && !item.disabled },
          { 'weui-sidebar__item_disabled': item.disabled }]}
          onClick={() => {
            this.handleClick(item)
          }}
          ref={`tab-item-${item.index}`}
        >
          {item.label}
        </div>
      ))
    )

    return (
      <div class="weui-sidebar">
        <div class="weui-sidebar__bar" style={
          {
            ... this.lineWidth !== 4 ? { '--sidebar-border-width': `${this.lineWidth}px` } : {},
            ... this.lineColor ? { '--sidebar-border-color': this.lineColor } : {}

          }} ref="bar">
          {items}
        </div>
        <div class="weui-sidebar__content">
          {this.$slots.default}
        </div>
      </div>
    )
  }
}