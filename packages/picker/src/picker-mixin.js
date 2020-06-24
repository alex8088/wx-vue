export default {
  inheritAttrs: false,
  inject: {
    form: {
      default: null
    },
    group: {
      default: null
    }
  },
  props: {
    label: String,
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    emptyTips: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      currentText: ""
    };
  },
  computed: {
    _disabled() {
      return this.__disabled()
    }
  },
  created() {
    this.setDisplayText()
  },
  methods: {
    __disabled() {
      return this.disabled || (this.group || {}).disabled || (this.form || {}).disabled
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
      this.$nextTick(this.setDisplayText())
    },
    currentValue(val) {
      this.$emit('change', val)
      this.$emit('input', val)
    }
  }
}