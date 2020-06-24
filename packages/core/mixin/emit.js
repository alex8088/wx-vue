const emitMixin = {
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('change', val)
      this.$emit('input', val)
    }
  }
}

export default emitMixin