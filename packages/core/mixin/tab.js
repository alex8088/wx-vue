const parentMixin = {
  props: {
    value: [String, Number]
  },
  provide() {
    return {
      parent: this
    };
  },
  data() {
    return {
      children: [],
      currentIndex: this.value || 0
    };
  },
  methods: {
    addItem(childItem) {
      this.children.push(childItem);
      const vnodes = this.$slots.default.filter(
        vnode => vnode.componentOptions
      );
      this.children = this.children.sort(
        (a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode)
      );
      this.children.forEach((item, index) => {
        item.index = item.name || index;
      });
    },
    removeItem(childItem) {
      this.children = this.children.filter(item => item !== childItem);
    }
  },
  watch: {
    value(val) {
      this.currentIndex = val;
    }
  }
}

const childMixin = {
  inject: {
    parent: {
      default: null
    }
  },
  data() {
    return {
      index: this.name || 0
    }
  },
  computed: {
    active() {
      return this.parent.currentIndex === this.index
    }
  },
  created() {
    this.parent && this.parent.addItem(this)
  },
  beforeDestroy() {
    this.parent && this.parent.removeItem(this)
  }
}

export {
  parentMixin,
  childMixin
}