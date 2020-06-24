<template>
  <div class="weui-footer" :class="{'weui-footer_fixed-bottom' : fixed}">
    <p class="weui-footer__links" v-if="links.length > 0">
      <a
        v-for="(link, index) in links"
        :key="index"
        href="javascript:"
        class="weui-footer__link"
        @click="handleClick($event, link.to)"
      >{{link.text}}</a>
    </p>
    <p class="weui-footer__text">
      <slot>{{text}}</slot>
    </p>
  </div>
</template>

<script>
import { go } from "../../core/router";

export default {
  name: "WxFooter",
  props: {
    text: String,
    links: {
      type: Array,
      default: () => []
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(evt, to) {
      if (to) {
        go(to, this.$router);
      } else {
        this.$emit("click", evt);
      }
    }
  }
};
</script>