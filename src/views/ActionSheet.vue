<template>
  <div class="actionsheet">
    <page-header title="Action Sheet" desc="弹出式菜单"></page-header>
    <div class="page__bd">
      <wx-button @click="visi = true" type="light">弹出菜单</wx-button>
      <wx-action-sheet :visible.sync="visi" title="这是一个标题，可以为一行或者两行。">
        <wx-action-sheet-item>示例菜单</wx-action-sheet-item>
        <wx-action-sheet-item>示例菜单</wx-action-sheet-item>
        <wx-action-sheet-item negative>负向菜单</wx-action-sheet-item>
      </wx-action-sheet>
      <wx-divider>options.to/@click</wx-divider>
      <wx-button @click="visi2 = true" type="light">事件示例</wx-button>
      <wx-action-sheet :visible.sync="visi2" title="事件示例">
        <wx-action-sheet-item :to="{path: '/'}">路由跳转</wx-action-sheet-item>
        <wx-action-sheet-item @click="handleClick">点击事件</wx-action-sheet-item>
      </wx-action-sheet>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visi: false,
      visi2: false
    };
  },
  methods: {
    handleClick() {
      this.$toast("got!");
    }
  }
};
</script>