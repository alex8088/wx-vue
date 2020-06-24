const dialogMixin = {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close(result) {
      this.$emit("update:visible", false);
      this.$emit("close", result);
    }
  }
}

export default dialogMixin