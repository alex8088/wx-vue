<template>
  <div class="weui-cell">
    <div class="weui-cell__hd" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="weui-cell__bd" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="weui-cell__ft" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WxFormCell"
};
</script>