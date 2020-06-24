<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
      <slot></slot>
    </div>
    <div class="weui-tabbar">
      <div
        :class="['weui-tabbar__item', {'weui-bar__item_on': item.active}]"
        v-for="item in children"
        :key="item.index"
        @click="handleClick(item)"
      >
        <div class="weui-tabbar__icon_badge" v-if="item.badge !== undefined && item.badge !== null">
          <img :src="item.currentIcon" alt class="weui-tabbar__icon" />
          <span class="weui-badge" v-if="item.badge">{{item.badge}}</span>
          <span class="weui-badge weui-badge_dot" v-else></span>
        </div>
        <img :src="item.currentIcon" alt class="weui-tabbar__icon" v-else />
        <p class="weui-tabbar__label" :style="item.style">{{item.label}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { parentMixin } from "../../core/mixin/tab";

export default {
  name: "WxTabbar",
  mixins: [parentMixin],
  props: {
    activeColor: String
  },
  methods: {
    handleClick(tabbarItem) {
      this.currentIndex = tabbarItem.index;
      this.$emit("input", tabbarItem.index);
      this.$emit("item-click", tabbarItem.index);
    }
  }
};
</script>