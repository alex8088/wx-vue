<template>
  <div class="wx-dialog">
    <transition name="fade">
      <div class="weui-mask" @click="handleClose" v-if="visible"></div>
    </transition>
    <transition name="fade">
      <div class="weui-dialog" v-if="visible">
        <div class="weui-dialog__hd">
          <slot name="header"></slot>
        </div>
        <div class="weui-dialog__bd">
          <slot></slot>
        </div>
        <div class="weui-dialog__ft">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import dialogMixin from "../../core/mixin/dialog"
export default {
  name: "WxDialog",
  mixins: [dialogMixin],
  props: {
    hideOnBlur: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      if (this.hideOnBlur) {
        this.close();
      }
    }
  }
};
</script>