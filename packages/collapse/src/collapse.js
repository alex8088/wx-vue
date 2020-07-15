import emitMixin from "../../core/mixin/emit"

export default {
  name: 'WxCollapse',
  mixins: [emitMixin],
  props: {
    value: {
      type: [Array, String, Number],
      default: () => []
    },
    accordion: Boolean
  },
  provide() {
    return {
      collapse: this
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleItemClick(name) {
      let arr = [].concat(this.currentValue)
      const include = arr.indexOf(name) > -1
      if (this.accordion) {
        const activeName = arr[0]
        this.$children.forEach(child => {
          if (child.name === activeName) child.expanded = false
        })
        this.currentValue = include ? '' : name
      } else {
        this.currentValue = include
          ? arr.filter((activeName) => activeName !== name)
          : arr.concat(name)
      }
    }
  },
  render() {
    return (
      <div class="weui-collapse">
        {this.$slots.default}
      </div>
    )
  }
}