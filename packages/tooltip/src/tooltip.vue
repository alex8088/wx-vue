<template>
  <div class="wx-tooltip">
    <transition name="fade">
      <div class="weui-toptips weui-toptips_warn" style="display: block;" v-if="visible">{{msg}}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WxTooltip",
  props: {
    visible: Boolean,
    msg: String,
    time: {
      type: Number,
      default: 2000
    }
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.$emit("update:visible", false);
        }, this.time);
      }
    }
  }
};
</script>