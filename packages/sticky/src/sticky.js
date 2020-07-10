export default {
  name: 'WxSticky',
  props: {
    ObservedContainer: [String, Element],
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return { 
      container: null,
      height: 0,
      bind: false,
      fixed: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollHandler()
    })

    this.height = this.$el.offsetHeight

    const oc = this.ObservedContainer
    if (oc)
      this.container = typeof oc === 'string' ? document.getElementById(oc) : oc

    let scroller = this.getScrollElement()
    
    const bind = () => {
      if (!this.bind) {
        scroller.addEventListener('scroll', this.scrollHandler)
        this.bind = true
      }
    }
    const unbind = () => {
      if (this.bind) {
        scroller.removeEventListener('scroll', this.scrollHandler)
        this.bind = false
      }
    }

    bind()

    this.$on('hook:activated', bind)
    this.$on('hook:deactivated', unbind)
    this.$once('hook:beforeDestroy', unbind)
  },
  methods: {
    getScrollElement() {
      let node = this.$el

      while (node.tagName !== 'HTML' && node.nodeType === 1 && node != window) {
        const { overflowY } = window.getComputedStyle(node)

        if ((/scroll|auto/i).test(overflowY)) {
          if (node.tagName !== 'BODY') {
            return node
          }
        }

        node = node.parentNode
      }

      return window
    },
    scrollHandler() {
      const elTop = this.$el.getBoundingClientRect().top

      if (this.offsetTop > elTop) {
        if (this.container && this.offsetTop + this.height > elTop + this.container.offsetHeight) {
          this.fixed = false
        } else {
          this.fixed = true
        }
      } else {
        this.fixed = false
      }
    }
  },
  render() {
    const { fixed, height, offsetTop } = this
    return (
      <div class="weui-sticky" style={{ ...(fixed ? { height: `${height}px` } : {}) }}>
        <div
          class={[{ 'weui-sticky_fixed': fixed }]}
          style={{ ...(fixed ? { top: `${offsetTop}px` } : {}) }}>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}