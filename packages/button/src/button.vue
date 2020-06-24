<template>
  <button
    class="weui-btn"
    :class="css"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <i class="weui-loading" v-if="loading"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "WxButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return ["default", "light", "warn"].indexOf(value) > -1;
      }
    },
    disabled: Boolean,
    loading: Boolean,
    mini: Boolean
  },
  computed: {
    css() {
      return {
        "weui-btn_primary": this.type === "default",
        "weui-btn_default": this.type === "light",
        "weui-btn_warn": this.type === "warn",
        "weui-btn_loading": this.loading,
        "weui-btn_disabled": this.disabled,
        "weui-btn_mini": this.mini
      };
    }
  }
};
</script>