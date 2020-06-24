export default {
  name: "WxDivider",
  render() {
    return (
      <div
        class={[
          "weui-loadmore",
          "weui-loadmore_line",
          { "weui-loadmore_dot": !this.$slots.default }
        ]}
      >
        <span class="weui-loadmore__tips">
          {this.$slots.default}
        </span>
      </div>
    )
  }
}