<template>
  <div class="wx-loading">
    <div class="weui-mask_transparent" v-if="visible"></div>
    <transition name="fade">
      <div class="weui-toast" v-if="visible">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">{{msg}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WxLoading",
  props: {
    visible: Boolean,
    msg: String
  }
};
</script>