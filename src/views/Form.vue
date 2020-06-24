<template>
  <div class="form">
    <page-header title="Form" desc="表单"></page-header>
    <div class="page__bd">
      <wx-button @click="go('/form/layout')">表单布局</wx-button>
      <wx-button @click="go('/form/validate')">表单校验</wx-button>
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