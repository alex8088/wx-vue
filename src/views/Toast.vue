<template>
  <div class="toast">
    <page-header title="Toast" desc="弹出式提示，仅支持插件模式"></page-header>
    <div class="page__bd">
      <wx-button @click="showToast1" type="light">文本提示</wx-button>
      <wx-divider>其他类型:options.type</wx-divider>
      <wx-button @click="showToast2('提交成功', 'success')" type="light">成功提示</wx-button>
      <wx-button @click="showToast2('提交失败', 'fail')" type="light">失败提示</wx-button>
      <wx-divider>显示时长:options.time</wx-divider>
      <wx-button @click="showToast3" type="light">显示4s</wx-button>
      <wx-divider>长文本:options.width</wx-divider>
      <wx-button @click="showToast4" type="light">200px长度</wx-button>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  methods: {
    showToast1() {
      this.$toast("只支持插件模式");
    },
    showToast2(msg, type) {
      this.$toast(msg, { type });
    },
    showToast3() {
      this.$toast("4s后自动消失", { time: 4000 });
    },
    showToast4() {
      this.$toast("尽可能保持提示文本不换行～", { width: 200 });
    }
  }
};
</script>