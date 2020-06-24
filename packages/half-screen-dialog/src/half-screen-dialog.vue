<template>
  <div class="wx-half-screen-dialog">
    <transition name="a-fade">
      <div class="weui-mask" v-show="visible" @click="close"></div>
    </transition>
    <transition name="a-slide-bottom">
      <div class="weui-half-screen-dialog" :class="[className]" v-show="visible">
        <div class="weui-half-screen-dialog__hd">
          <div class="weui-half-screen-dialog__hd__side"></div>
          <div class="weui-half-screen-dialog__hd__main">
            <strong class="weui-half-screen-dialog__title">{{title}}</strong>
            <span class="weui-half-screen-dialog__subtitle">{{desc}}</span>
          </div>
          <div class="weui-half-screen-dialog__hd__side"></div>
        </div>
        <div class="weui-half-screen-dialog__bd">
          <slot></slot>
        </div>
        <div class="weui-half-screen-dialog__ft">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import dialogMixin from "../../core/mixin/dialog"
export default {
  name: "WxHalfScreenDialog",
  mixins: [dialogMixin],
  props: {
    title: String,
    desc: String,
    className: String
  },
  methods: {
    hide() {
      this.$emit("update:visible", false);
    }
  }
};
</script>