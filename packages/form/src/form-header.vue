<template>
  <div class="weui-form__text-area" v-if="hasParent">
    <h2 class="weui-form__title">
      <slot>{{title}}</slot>
    </h2>
    <div class="weui-form__desc" v-if="desc || $slots.desc">
      <slot name="desc">{{desc}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WxFormHeader",
  inject: {
    form: {
      default: null
    }
  },
  props: {
    title: String,
    desc: String
  },
  data() {
    return {
      hasParent: this.form ? true : false
    };
  }
};
</script>