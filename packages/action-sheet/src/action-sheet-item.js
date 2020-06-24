import routerMixin from "../../core/mixin/router"
export default {
  name: 'WxActionSheetItem',
  mixins: [routerMixin],
  inject: {
    actionSheet: {
      default: false
    }
  },
  props: {
    negative: Boolean,
    to: [String, Object]
  },
  methods: {
    _handleClick() {
      this.$parent.hide()
      let _this = this;
      setTimeout(() => {
        this.$nextTick(() => {
          _this.handleClick()
        })
      }, 350)
    }
  },
  render(h) {
    if (this.actionSheet) {
      return h('div', {
        class: ['weui-actionsheet__cell', { 'weui-actionsheet__cell_warn': this.negative }],
        on: { 'click': this._handleClick }
      }, this.$slots.default)
    } else {
      return null
    }
  }
}