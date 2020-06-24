const inputMixin = {
  methods: {
    handleBlur(e) {
      if (this.currentValue && this.currentValue.length > 0) {
        let reg = this.pattern || "";
        if (reg && !new RegExp(reg).test(this.currentValue)) {
          this.$el.classList.add("weui-cell_warn");
        }
      }
      this.$emit("blur", e);
    },
    handleFocus(e) {
      this.$el.classList.remove("weui-cell_warn");
      this.$emit("focus", e);
    }
  }
}

export default inputMixin