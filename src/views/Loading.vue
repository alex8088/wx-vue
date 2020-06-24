<template>
  <div class="loading">
    <page-header title="Loading" desc="数据加载提示，仅支持插件模式"></page-header>
    <div class="page__bd">
      <wx-button @click="loading" type="light">加载中提示</wx-button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  methods: {
    loading() {
      this.$loading.show("加载中");
      setTimeout(() => {
        this.$loading.hide();
      }, 2000);
    }
  }
};
</script>