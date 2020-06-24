<template>
  <div>
    <label
      class="weui-cell weui-check__label needsclick"
      :class="{'weui-cell_disabled': option.disabled}"
      :for="`c-${uuid}-${index}`"
      v-for="(option, index) in options"
      :key="index"
    >
      <div class="weui-cell__hd needsclick">
        <input
          type="checkbox"
          class="weui-check needsclick"
          v-model="option.checked"
          :id="`c-${uuid}-${index}`"
          :name="name || `c-${uuid}`"
          :value="option.value"
          :disabled="option.disabled"
          :required="index === 0 ? required : false"
          :pattern="index === 0 ? (pattern || (required ? '{1,}': null)) : null"
          :emptytips="index === 0 ? emptyTips : null"
          :tips="index === 0 ? notMatchTips : null"
          @change="setCheckedOptions"
        />
        <i class="weui-icon-checked needsclick"></i>
      </div>
      <div class="weui-cell__bd needsclick">
        <p>{{option.label}}</p>
      </div>
    </label>
  </div>
</template>

<script>
import uuid from "../../core/uuid";
import emitMixin from "../../core/mixin/emit";

export default {
  name: "WxCheckbox",
  inheritAttrs: false,
  mixins: [emitMixin],
  props: {
    value: {
      type: Array,
      default: () => []
    },
    name: String,
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    pattern: String,
    emptyTips: String,
    notMatchTips: String
  },
  data() {
    return {
      uuid: uuid.rand(),
      currentValue: this.value
    };
  },
  created() {
    if (this.value) {
      let ops = this.options;
      if (ops && ops.length > 0) {
        for (let i = 0, len = ops.length; i < len; ++i) {
          this.setDefaultOptions(ops[i]);
        }
      }
    }
  },
  methods: {
    setDefaultOptions(option) {
      let defaultValues = this.value;
      option.checked = false;
      for (let i = 0, len = defaultValues.length; i < len; ++i) {
        if (defaultValues[i] === option.value) {
          option.checked = true;
          return;
        }
      }
    },
    setCheckedOptions() {
      let checkedValues = [];
      let checkboxInputs = this.$el.querySelectorAll(
        'input[type="checkbox"][name="' + (this.name || `c-${this.uuid}`) + '"]'
      );
      checkboxInputs.forEach(checkboxInput => {
        if (checkboxInput.checked) checkedValues.push(checkboxInput.value);
      });
      this.currentValue = checkedValues;
    }
  }
};
</script>