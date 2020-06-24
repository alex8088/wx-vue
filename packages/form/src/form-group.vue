<template>
  <div class="weui-cells__group weui-cells__group_form" v-if="hasParent">
    <div class="weui-cells__title" v-if="title">{{title}}</div>
    <div class="weui-cells" :class="[`weui-cells_${this.type}`]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WxFormGroup",
  inject: {
    form: {
      default: null
    }
  },
  provide() {
    return {
      group: this
    };
  },
  props: {
    title: String,
    disabled: Boolean,
    type: {
      type: String,
      default: "form",
      validator(value) {
        return ["form", "radio", "checkbox"].indexOf(value) > -1;
      }
    }
  },
  data() {
    return {
      hasParent: this.form ? true : false
    };
  }
};
</script>