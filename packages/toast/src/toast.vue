<template>
  <div class="wx-toast">
    <div class="weui-mask_transparent" v-if="visible"></div>
    <transition :name="transitionType">
      <div class="weui-toast" :style="styleClass" :class="toastClass" v-if="visible">
        <i class="weui-icon_toast" :class="[`weui-icon-${type}-no-circle`]" v-if="type !== 'text'"></i>
        <p class="weui-toast__content">{{msg}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WxToast",
  props: {
    visible: Boolean,
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["success", "fail", "text"].indexOf(value) > -1;
      }
    },
    time: {
      type: Number,
      default: 2000
    },
    width: {
      type: [String, Number],
      default: 120
    },
    msg: String
  },
  computed: {
    transitionType() {
      if (this.type === "text") {
        return "slide-bottom";
      }
      return "fade";
    },
    toastClass() {
      return {
        "weui-toast_text": this.type === "text",
        "weui-toast_bottom": this.type === "text"
      };
    },
    styleClass() {
      if (typeof this.width === "number") {
        return { width: `${this.width}px` };
      }
      return { width: this.width };
    }
  },
  watch: {
    visible(val) {
      if (val) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.$emit("update:visible", false);
        }, this.time);
      }
    }
  }
};
</script>