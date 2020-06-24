<template>
  <div class="wx-actionsheet">
    <transition name="fade">
      <div class="weui-mask" v-if="visible" @click="close"></div>
    </transition>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': visible}">
      <div class="weui-actionsheet__title" v-if="title">
        <p class="weui-actionsheet__title-text">{{title}}</p>
      </div>
      <div class="weui-actionsheet__menu">
        <slot></slot>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" @click="close">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import dialogMixin from "../../core/mixin/dialog"
export default {
  name: "WxActionSheet",
  mixins: [dialogMixin],
  provide() {
    return {
      actionSheet: true
    };
  },
  props: {
    title: String
  },
  methods: {
    hide() {
      this.$emit("update:visible", false);
    }
  }
};
</script>