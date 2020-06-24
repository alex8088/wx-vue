<template>
  <wx-tab v-model="t1" mode="fixed" class="tabbar">
    <wx-tab-item :label="`标签${i}`" v-for="i in 4" :key="'t1'+ i">内容{{i}}</wx-tab-item>
  </wx-tab>
</template>

<script>
export default {
  data() {
    return {
      t1: 1
    };
  }
};
</script>