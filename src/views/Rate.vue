<template>
  <div class="rate">
    <page-header title="Rate" desc="评分"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-rate v-model="n1"></wx-rate>
      <wx-divider>尺寸</wx-divider>
      <wx-rate v-model="n2" :size="35"></wx-rate>
      <wx-divider>数量</wx-divider>
      <wx-rate v-model="n3" :count="7"></wx-rate>
      <wx-divider>颜色</wx-divider>
      <wx-rate v-model="n4" color="#ee0a24"></wx-rate>
      <wx-divider>禁用</wx-divider>
      <wx-rate v-model="n5" disabled></wx-rate>
      <wx-divider>辅助描述</wx-divider>
      <wx-rate v-model="n6" label="评分" :texts="texts"></wx-rate>
      <wx-divider>change 事件，当前值：{{n7}}</wx-divider>
      <wx-rate v-model="n7" @change="handleChange"></wx-rate>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n1: 2,
      n2: 3,
      n3: 0,
      n4: 1,
      n5: 3,
      n6: 4,
      n7: 2,
      texts: ["非常差", "不满意", "一般", "满意", "非常满意"]
    };
  },
  methods: {
    handleChange(v) {
      this.$toast(`当前值：${v}`);
    }
  }
};
</script>
