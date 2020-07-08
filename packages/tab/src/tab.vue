<template>
  <div :class="{'weui-tab': fixed}">
    <div class="weui-tab__bar" :class="[{'weui-tab__bar_scrollable': scrollable}]">
      <div class="weui-tab__bar-area" ref="bar">
        <div
          :class="['weui-tab__item', {'weui-tab__item_on': item.active && !item.disabled}, {'weui-tab__item_disabled': item.disabled}]"
          v-for="item in children"
          :key="item.index"
          @click="handleClick(item)"
          :ref="`tab-item-${item.index}`"
          :style="item.style"
        >{{item.label}}</div>
        <div class="weui-tab__line" :style="lineStyle" ref="line"></div>
      </div>
    </div>
    <div :class="[fixed ? 'weui-tab__panel': 'weui-tab__content']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { parentMixin } from "../../core/mixin/tab";

export default {
  name: "WxTab",
  mixins: [parentMixin],
  props: {
    lineHeight: {
      type: Number,
      default: 2
    },
    activeColor: String,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    mode: {
      type: String,
      default: "custom",
      validator(value) {
        return ["custom", "fixed", "sticky"].indexOf(value) > -1;
      }
    }
  },
  computed: {
    lineStyle() {
      return this.getLineStyle();
    },
    fixed() {
      return this.mode === "fixed";
    },
    scrollable() {
      return this.children.length > this.scrollThreshold;
    }
  },
  methods: {
    initLine() {
      const lineStyle = this.getLineStyle();
      if (lineStyle) {
        const $line = this.$refs.line;
        Object.keys(lineStyle).forEach(key => {
          $line.style[key] = lineStyle[key];
        });
        $line.style.transition = "none";
      }
    },
    getLineStyle() {
      const $el = this.getCurrentTabItem();
      if ($el) {
        const width = $el.offsetWidth / 2;
        const left = $el.offsetLeft + width;

        const style = {
          ...(this.lineHeight !== 2 ? { height: `${this.lineHeight}px` } : {}),
          ...(this.activeColor ? { backgroundColor: this.activeColor } : {}),
          width: `${width}px`,
          transform: `translateX(${left}px) translateX(-50%)`,
          transition: ".3s cubic-bezier(.645,.045,.355,1)"
        };
        return style;
      }
      return null;
    },
    getCurrentTabItem() {
      const $el = this.$refs[`tab-item-${this.currentIndex}`];
      return $el ? $el[0] : null;
    },
    scrollToActiveTabItem() {
      if (this.scrollable) {
        const $el = this.getCurrentTabItem();
        if ($el) {
          const $bar = this.$refs.bar;
          let count = 0;
          const duration = 15;
          const from = $bar.scrollLeft;
          const to = $el.offsetLeft - ($bar.offsetWidth - $el.offsetWidth) / 2;
          const raf = () => {
            $bar.scrollLeft += (to - from) / duration;
            if (++count < duration) window.requestAnimationFrame(raf);
          };
          raf();
        }
      }
    },
    handleClick(tabItem) {
      if (!tabItem.disabled) {
        this.currentIndex = tabItem.index;
        this.$emit("input", tabItem.index);
        this.$emit("item-click", tabItem.index);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initLine();
    });
  },
  watch: {
    currentIndex() {
      this.scrollToActiveTabItem();
    }
  }
};
</script>