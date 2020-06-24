export default {
  name: 'WxGrid',
  props: {
    cols: {
      type: Number,
      default: 3
    }
  },
  provide() {
    return {
      cols: this.cols
    }
  },
  render(h) {
    return h('div', { class: ['weui-grids'] }, this.$slots.default)
  }
}