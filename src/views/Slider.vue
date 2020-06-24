<template>
  <div class="slider">
    <page-header title="Slider" desc="滑块"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-slider v-model="percent1"></wx-slider>
      <wx-divider>默认值</wx-divider>
      <wx-slider v-model="percent2"></wx-slider>
      <wx-divider>显示数值:props.showNumber</wx-divider>
      <wx-slider v-model="percent3" show-number></wx-slider>
      <wx-divider>滑动步伐:props.step</wx-divider>
      <wx-slider v-model="percent4" show-number :step="10"></wx-slider>
      <wx-divider>不可用:props.disabled</wx-divider>
      <wx-slider v-model="percent5" disabled></wx-slider>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent1: 0,
      percent2: 70,
      percent3: 20,
      percent4: 50,
      percent5: 50
    };
  }
};
</script>
