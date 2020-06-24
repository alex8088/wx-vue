<template>
  <div
    class="weui-cell"
    :class="{'weui-cell_access': !!to || $listeners.click, 'weui-cell_indent': icon && !$slots.icon}"
    @click="handleClick"
    v-if="list"
  >
    <div class="weui-cell__hd" v-if="icon || $slots.icon">
      <slot name="icon">
        <img :src="icon" alt />
      </slot>
    </div>
    <div class="weui-cell__bd">
      <slot>{{title}}</slot>
    </div>
    <div class="weui-cell__ft">
      <slot name="desc">{{desc}}</slot>
    </div>
  </div>
</template>

<script>
import routerMixin from "../../core/mixin/router";

export default {
  name: "WxListItem",
  mixins: [routerMixin],
  inject: {
    list: {
      default: false
    }
  },
  props: {
    icon: String,
    title: String,
    desc: String,
    to: [String, Object]
  }
};
</script>