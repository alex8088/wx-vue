import emitMixin from "../../core/mixin/emit"

export default {
  name: 'WxSearchBar',
  mixins: [emitMixin],
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    showCancelAction: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focusing: false,
      currentValue: this.value
    }
  },
  methods: {
    handleFocus() {
      this.focusing = true
      this.$refs.input.focus()
      this.$emit('focus')
    },
    handleBlur() {
      if (!this.currentValue.length) this.cancelSearch()
    },
    handleClear() {
      this.currentValue = ''
      this.$refs.input.focus()
      this.$emit('clear')
    },
    handleCancel() {
      this.cancelSearch()
      this.$refs.input.blur()
      this.$emit('cancel')
    },
    cancelSearch() {
      this.currentValue = ''
      this.focusing = false
    }
  },
  render() {
    return (
      <div class={["weui-search-bar", { "weui-search-bar_focusing": this.focusing }]}>
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search"
              class="weui-search-bar__input"
              placeholder={this.placeholder}
              autocomplete="off"
              v-model={this.currentValue}
              onBlur={this.handleBlur}
              required
              ref="input" />
            <a href="javascript:" class="weui-icon-clear" onClick={this.handleClear}></a>
          </div>
          <label class="weui-search-bar__label" onClick={this.handleFocus}>
            <i class="weui-icon-search"></i>
            <span>{this.placeholder}</span>
          </label>
        </div>
        {this.showCancelAction ? (<a href="javascript:" class="weui-search-bar__cancel-btn" onClick={this.handleCancel}>取消</a>) : null}
      </div>

    )
  }
}