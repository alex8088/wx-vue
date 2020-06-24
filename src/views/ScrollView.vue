<template>
  <div class="scrollview">
    <page-header title="Scroll View" desc="数据滚动视图"></page-header>
    <div class="page__bd">
      <wx-button @click="go('/scrollview/sample')">smoothing</wx-button>
      <wx-button @click="go('/scrollview/events')">下拉刷新</wx-button>
      <wx-button @click="go('/scrollview/events')">上拉加载</wx-button>
      <wx-button @click="go('/scrollview/props')">自定义显示文本</wx-button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  methods: {
    go(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>