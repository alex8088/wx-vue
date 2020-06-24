<template>
  <div class="alert">
    <page-header title="Alert" desc="警告提示框，推荐使用插件模式"></page-header>
    <div class="page__bd">
      <wx-button @click="visi = true" type="light">组件模式</wx-button>
      <wx-button @click="showAlert" type="light">插件模式</wx-button>
      <wx-divider>按钮文本:options.buttonText</wx-divider>
      <wx-button @click="showAlert2" type="light">定制按钮文本</wx-button>
      <wx-divider>事件:@close/插件回调</wx-divider>
      <wx-button @click="showAlert3" type="light">关闭事件</wx-button>
      <wx-alert :msg="msg" :visible.sync="visi"></wx-alert>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visi: false,
      msg: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
    };
  },
  methods: {
    showAlert() {
      this.$alert("这是 this.$alert 调用的警告提示框");
    },
    showAlert2() {
      this.$alert("按钮文本不宜太长，建议2～4个字", {
        buttonText: "知道了"
      });
    },
    showAlert3() {
      this.$alert("请您确认～", {}, function() {
        this.$toast('已关闭')
      });
    }
  }
};
</script>