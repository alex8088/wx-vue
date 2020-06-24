<template>
  <div class="tab">
    <page-header title="Tab" desc="标签页"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-divider>普通用法</wx-divider>
      <wx-tab v-model="t1">
        <wx-tab-item :label="`标签${i}`" v-for="i in 4" :key="'t1'+ i">内容{{i}}</wx-tab-item>
      </wx-tab>
      <wx-divider>v-model: 绑定索引/标签名(name)</wx-divider>
      <wx-tab v-model="t2">
        <wx-tab-item label="标签1">内容1</wx-tab-item>
        <wx-tab-item label="标签2">内容2</wx-tab-item>
        <wx-tab-item label="标签3" name="l3">内容3</wx-tab-item>
      </wx-tab>
      <wx-divider>bar高度/激活颜色/不可用</wx-divider>
      <wx-tab v-model="t3" :line-height="1" active-color="#ee0a24">
        <wx-tab-item label="标签1">内容1</wx-tab-item>
        <wx-tab-item label="标签2">内容2</wx-tab-item>
        <wx-tab-item label="标签3" disabled>内容3</wx-tab-item>
        <wx-tab-item label="标签4">内容4</wx-tab-item>
      </wx-tab>
      <wx-divider>事件</wx-divider>
      <wx-tab v-model="t4" @item-click="handleClick">
        <wx-tab-item label="标签1">内容1</wx-tab-item>
        <wx-tab-item label="标签2">内容2</wx-tab-item>
        <wx-tab-item label="标签3" disabled>内容3</wx-tab-item>
      </wx-tab>
      <wx-divider>可滚动/scroll threshold</wx-divider>
      <wx-tab v-model="t5" :scroll-threshold="4">
        <wx-tab-item :label="`标签${i}`" v-for="i in 12" :key="'t1'+ i">内容{{i}}</wx-tab-item>
      </wx-tab>
      <wx-divider>固定导航模式，类似tabbar</wx-divider>
      <div style="text-align: center;">
        <wx-link :to="{path: '/tab/fixed'}" mini>查看示例</wx-link>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      t1: 1,
      t2: "l3",
      t3: 0,
      t4: 0,
      t5: 0
    };
  },
  methods: {
    handleClick(index) {
      this.$toast(`标签页${index}`);
    }
  }
};
</script>