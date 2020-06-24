<template>
  <div>
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div class="weui-cells">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WxList",
  props: {
    title: String
  },
  provide() {
    return {
      list: true
    };
  }
};
</script>