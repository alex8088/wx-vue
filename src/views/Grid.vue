<template>
  <div class="grid">
    <page-header title="Grid" desc="九宫格"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-grid>
        <wx-grid-item :label="`Grid ${i}`" :icon="icon" :to="{path: '/'}" v-for="i in 6" :key="i"></wx-grid-item>
      </wx-grid>
      <wx-divider>自定义-cols</wx-divider>
      <wx-grid :cols="2">
        <wx-grid-item :label="`Grid ${i}`" :icon="icon" :to="{path: '/'}" v-for="i in 4" :key="i"></wx-grid-item>
      </wx-grid>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import icon from "@/assets/picture.png";
export default {
  data() {
    return {
      icon
    };
  }
};
</script>
