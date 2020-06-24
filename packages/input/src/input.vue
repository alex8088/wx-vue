<template>
  <div
    class="weui-cell"
    :class="[{'weui-cell_readonly': readonly}, {'weui-cell_disabled': _disabled}]"
    v-if="hasParent"
  >
    <div class="weui-cell__hd" v-if="label || $slots.prefix">
      <label class="weui-label" v-if="label && !$slots.prefix">{{label}}</label>
      <slot name="prefix"></slot>
    </div>
    <div class="weui-cell__bd" :class="{'weui-flex': clearable}">
      <input
        v-model="currentValue"
        class="weui-input needsclick"
        :type="type"
        :pattern="pattern"
        :notmatchtips="notMatchTips"
        :emptytips="emptyTips"
        v-bind="$attrs"
        :readonly="readonly"
        :disabled="_disabled"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <button
        class="weui-btn_reset weui-btn_icon weui-btn_input-clear"
        @mousedown.prevent
        @click="handleClear"
        v-if="clearable"
      >
        <i class="weui-icon-clear"></i>
      </button>
    </div>
    <div class="weui-cell__ft">
      <i class="weui-icon-warn"></i>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
import inputMixin from "../../core/mixin/input";
import emitMixin from "../../core/mixin/emit";

export default {
  name: "WxInput",
  inheritAttrs: false,
  mixins: [inputMixin, emitMixin],
  inject: {
    form: {
      default: null
    },
    group: {
      default: null
    }
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "number", "password"].indexOf(value) > -1;
      }
    },
    label: String,
    pattern: String,
    emptyTips: String,
    notMatchTips: String,
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
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
  },
  methods: {
    handleClear() {
      this.currentValue = "";
    }
  }
};
</script>