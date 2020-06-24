<template>
  <a href="javascript:" class="weui-grid" @click="handleClick" :style="style">
    <div class="weui-grid__icon">
      <img v-if="icon" :src="icon" alt />
    </div>
    <p class="weui-grid__label">{{label}}</p>
  </a>
</template>

<script>
import routerMixin from "../../core/mixin/router";

export default {
  name: "WxGridItem",
  mixins: [routerMixin],
  props: ["icon", "label", "to"],
  inject: {
    cols: {
      default: 3
    }
  },
  computed: {
    style() {
      return { width: `${100 / this.cols}%` };
    }
  }
};
</script>