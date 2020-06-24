<template>
  <div class="progress">
    <page-header title="Progress" desc="进度条"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-progress :percentage="20"></wx-progress>
      <wx-divider>宽度/颜色/不显示进度文本</wx-divider>
      <wx-progress :percentage="20" color="#10aeff" :stroke-width="6" :show-text="false"></wx-progress>
      <wx-divider>状态控制</wx-divider>
      <wx-progress :percentage="p1" :status="s1" :color="c1"></wx-progress>
      <wx-progress :percentage="p2" :status="s2"></wx-progress>
      <br />
      <wx-button @click="handleClick">上传</wx-button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1: 0,
      p2: 0,
      s1: null,
      s2: null,
      c1: null
    };
  },
  methods: {
    handleClick() {
      this.p1 = 0;
      this.p2 = 0;
      this.s1 = null;
      this.s2 = null;
      this.c1 = null;
      let inte = setInterval(() => {
        if (this.p1 < 70) {
          this.p1 += 1;
        } else {
          this.s1 = "fail";
          this.c1 = "#fa5151";
        }
        if (this.p2 < 100) {
          this.p2 += 1;
        } else {
          this.s2 = "success";
          clearInterval(inte);
        }
      }, 50);
    }
  }
};
</script>