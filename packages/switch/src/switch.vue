<template>
  <div class="weui-cell weui-cell_switch" v-if="hasParent">
    <div class="weui-cell__bd">{{label}}</div>
    <div class="weui-cell__ft">
      <input
        class="weui-switch needsclick"
        type="checkbox"
        v-model="currentValue"
        :disabled="_disabled"
      />
    </div>
  </div>
</template>

<script>
import emitMixin from "../../core/mixin/emit";

export default {
  name: "WxSwitch",
  inheritAttrs: false,
  mixins: [emitMixin],
  inject: {
    form: {
      default: null
    },
    group: {
      default: null
    }
  },
  props: {
    value: Boolean,
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      hasParent: this.form ? true : false
    };
  },
  computed: {
    _disabled() {
      return (
        this.disabled ||
        (this.group || {}).disabled ||
        (this.form || {}).disabled
      );
    }
  }
};
</script>
