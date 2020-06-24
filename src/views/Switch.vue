<template>
  <div class="switch">
    <wx-form ref="form">
      <wx-form-header>开关</wx-form-header>
      <wx-form-body>
        <wx-form-group title="通知开关">
          <wx-switch v-model="val1" label="接收消息通知"></wx-switch>
          <wx-switch v-model="val2" label="显示消息详情" v-if="val1"></wx-switch>
        </wx-form-group>
        <wx-form-group title="不可用">
          <wx-switch v-model="val3" label="跟随系统声音" disabled></wx-switch>
        </wx-form-group>
      </wx-form-body>
    </wx-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: true,
      val2: false,
      val3: true
    };
  },
  watch: {
    val1(val) {
      if (!val) this.val2 = val;
    }
  }
};
</script>