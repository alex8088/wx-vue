<template>
  <div>
    <label
      class="weui-cell weui-check__label needsclick"
      :class="{'weui-cell_disabled': option.disabled}"
      :for="`r-${uuid}-${index}`"
      v-for="(option, index) in options"
      :key="index"
    >
      <div class="weui-cell__bd needsclick">
        <p>{{option.label}}</p>
      </div>
      <div class="weui-cell__ft needsclick">
        <input
          type="radio"
          class="weui-check"
          v-model="currentValue"
          :id="`r-${uuid}-${index}`"
          :name="name || `r-${uuid}`"
          :value="option.value"
          :disabled="option.disabled"
          :required="required"
          :emptytips="emptyTips"
        />
        <span class="weui-icon-checked needsclick"></span>
      </div>
    </label>
  </div>
</template>

<script>
import uuid from "../../core/uuid";
import emitMixin from "../../core/mixin/emit";

export default {
  name: "WxRadio",
  inheritAttrs: false,
  mixins: [emitMixin],
  props: {
    value: [String, Number],
    name: String,
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    emptyTips: String
  },
  data() {
    return {
      uuid: uuid.rand(),
      currentValue: this.value
    };
  }
};
</script>
