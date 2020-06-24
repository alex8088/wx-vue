<template>
  <div
    class="weui-cell"
    :class="[{'weui-cell_readonly': readonly}, {'weui-cell_disabled': _disabled}]"
    v-if="hasParent"
  >
    <div class="weui-cell__bd">
      <textarea
        v-model="currentValue"
        class="weui-textarea needsclick"
        :style="textareaStyle"
        :rows="rows"
        :maxLength="maxLength"
        :pattern="pattern"
        :notmatchtips="notMatchTips"
        :emptytips="emptyTips"
        v-bind="$attrs"
        :readonly="readonly"
        :disabled="_disabled"
        @focus="handleFocus"
        @blur="handleBlur"
        ref="textarea"
      ></textarea>
      <div class="weui-textarea-counter" v-if="maxLength">
        <span>{{this.currentValue.length}}</span>
        /{{maxLength}}
      </div>
    </div>
  </div>
</template>

<script>
import calcTextareaHeight from "./calcTextareaHeight";
import inputMixin from "../../core/mixin/input";

export default {
  name: "WxTextarea",
  inheritAttrs: false,
  mixins: [inputMixin],
  inject: {
    form: {
      default: null
    },
    group: {
      default: null
    }
  },
  props: {
    value: String,
    pattern: String,
    notMatchTips: String,
    emptyTips: String,
    maxLength: Number,
    rows: {
      type: Number,
      default: 3
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: 0,
      currentValue: "",
      hasParent: this.form ? true : false
    };
  },
  computed: {
    textareaStyle() {
      if (this.height) {
        return {
          height: `${this.height}px`
        };
      }
      return {};
    },
    _disabled() {
      return (
        this.disabled ||
        (this.group || {}).disabled ||
        (this.form || {}).disabled
      );
    }
  },
  created() {
    this.currentValue = this.value
      ? this.maxLength && this.value.length > this.maxLength
        ? this.value.slice(0, this.maxLength)
        : this.value
      : "";
  },
  mounted() {
    if (this.autosize) this.$nextTick(this.resize);
  },
  methods: {
    resize() {
      this.height = calcTextareaHeight(this.$refs.textarea, this.rows);
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      if (this.autosize) this.$nextTick(this.resize);
      this.$emit("change", val);
      this.$emit("input", val);
    }
  }
};
</script>