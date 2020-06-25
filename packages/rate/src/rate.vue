<template>
  <div :class="['weui-rate', {'weui-rate_disabled' : disabled}]">
    <label class="weui-rate__title" v-if="label">{{label}}</label>
    <div
      v-for="i in count"
      :key="i"
      :class="['weui-rate__item', { 'weui-rate__item_active': currentValue >= i}]"
      @click="handleClick(i)"
      :style="[style, getColor(i)]"
    ></div>
    <label class="weui-rate__desc" v-if="texts.length > 0">{{texts[currentValue-1]}}</label>
  </div>
</template>

<script>
import emitMixin from "../../core/mixin/emit";

export default {
  name: "WxRate",
  mixins: [emitMixin],
  props: {
    value: Number,
    count: {
      type: Number,
      default: 5
    },
    size: {
      type: Number,
      default: 28
    },
    color: String,
    spacing: {
      type: Number,
      default: 12
    },
    label: String,
    texts: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    style() {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        marginRight: `${this.spacing}px`
      };
    }
  },
  methods: {
    getColor(i) {
      if (this.color && this.currentValue >= i)
        return { backgroundColor: this.color };
    },
    handleClick(i) {
      if (!this.disabled)
        this.currentValue = this.currentValue === i ? i - 1 : i;
    }
  }
};
</script>