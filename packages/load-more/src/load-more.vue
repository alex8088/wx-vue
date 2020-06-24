<template>
  <div
    class="weui-loadmore"
    :class="{'weui-loadmore_line': !loading, 'weui-loadmore_dot': !loading && !$slots.default}"
  >
    <i class="weui-loading" v-if="loading"></i>
    <span class="weui-loadmore__tips">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "WxLoadMore",
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
};
</script>