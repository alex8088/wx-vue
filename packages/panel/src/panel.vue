<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd" v-if="title">{{title}}</div>
    <div class="weui-panel__bd">
      <slot></slot>
    </div>
    <div class="weui-panel__ft" v-if="!!moreTo || $listeners.moreClick" @click="handleClick">
      <a href="javascript:" class="weui-cell weui-cell_active weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">{{moreText}}</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>

<script>
import { go } from "../../core/router";

export default {
  name: "WxPanel",
  props: {
    title: String,
    moreTo: [String, Object],
    moreText: String
  },
  provide() {
    return {
      panel: true
    };
  },
  methods: {
    handleClick(evt) {
      if (this.moreTo) {
        go(this.moreTo, this.$router);
      } else {
        this.$emit("moreClick", evt);
      }
    }
  }
};
</script>