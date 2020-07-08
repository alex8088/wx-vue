<template>
  <div class="sidebar">
    <page-header title="Sidebar" desc="侧边导航栏"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-sidebar v-model="s1" style="height: 312px;">
        <wx-sidebar-item :label="`标签${i}`" v-for="i in 11" :key="i">内容{{i}}</wx-sidebar-item>
      </wx-sidebar>
      <wx-divider>禁用</wx-divider>
      <wx-sidebar v-model="s2" style="height: 260px;">
        <wx-sidebar-item :label="`标签${i}`" v-for="i in 2" :key="i">内容{{i}}</wx-sidebar-item>
        <wx-sidebar-item label="标签3" disabled>内容3</wx-sidebar-item>
        <wx-sidebar-item label="标签4">内容4</wx-sidebar-item>
      </wx-sidebar>
      <wx-divider>line 设置</wx-divider>
      <wx-sidebar v-model="s3" style="height: 260px;" :line-width="3" line-color="#ff0000">
        <wx-sidebar-item :label="`标签${i}`" v-for="i in 4" :key="i">内容{{i}}</wx-sidebar-item>
      </wx-sidebar>
      <wx-divider>change 事件</wx-divider>
      <wx-sidebar v-model="s4" style="height: 260px;" @change="handleChange">
        <wx-sidebar-item :label="`标签${i}`" v-for="i in 4" :key="i">内容{{i}}</wx-sidebar-item>
      </wx-sidebar>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s1: 1,
      s2: 0,
      s3: 0,
      s4: 0
    };
  },
  methods: {
    handleChange(index) {
      this.$toast(`标签页${index}`);
    }
  }
};
</script>