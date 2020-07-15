import uid from '../../core/uuid'
import WxCollapseTransition from './collapse-transition'

export default {
  name: 'WxCollapseItem',
  components: {
    WxCollapseTransition
  },
  props: {
    name: {
      type: [String, Number],
      default: () => uid.rand()
    },
    title: String
  },
  inject: {
    collapse: {
      default: null
    }
  },
  data() {
    return {
      expanded: false
    }
  },
  created() {
    this.expanded = this.collapse && [].concat(this.collapse.currentValue).indexOf(this.name) > -1
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded
      this.collapse.handleItemClick(this.name)
    }
  },
  render() {
    if (this.collapse) {
      const hd = (
        <div class="weui-collapse__hd" onClick={this.handleClick}>
          {
            this.$slots.header ? this.$slots.header : (<p class="weui-collapse__title">{this.title}</p>)
          }
        </div>
      )

      const bd = (
        <wx-collapse-transition>
          {
            this.expanded ? (
              <div class="weui-collapse__bd">
                <div class="weui-collapse__content"> {this.$slots.default}</div>
              </div>) : null
          }
        </wx-collapse-transition>
      )

      return (
        <div class={['weui-collapse__item', { 'weui-collapse__item-expanded': this.expanded }]}>
          {hd}
          {bd}
        </div>
      )
    }
  }
}