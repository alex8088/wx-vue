<template>
  <div class="tooltip">
    <page-header title="Tooltip" desc="工具提示条，仅支持插件模式"></page-header>
    <div class="page__bd">
      <wx-button @click="showTooltip1" type="light">文本提示</wx-button>
      <wx-divider>显示时长:options.time</wx-divider>
      <wx-button @click="showTooltip2" type="light">显示4s</wx-button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  methods: {
    showTooltip1() {
      this.$tooltip("只支持插件模式");
    },
    showTooltip2() {
      this.$tooltip("错误提示", 4000);
    }
  }
};
</script>