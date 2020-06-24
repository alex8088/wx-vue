<template>
  <div class="confirm">
    <page-header title="Confirm" desc="确认提示框，推荐使用插件模式"></page-header>
    <div class="page__bd">
      <wx-button @click="visi = true" type="light">组件模式</wx-button>
      <wx-button @click="showConfirm" type="light">插件模式</wx-button>
      <wx-divider>标题:options.title</wx-divider>
      <wx-button @click="showConfirm2" type="light">带有标题</wx-button>
      <wx-divider>按钮文本:options.*ButtonText</wx-divider>
      <wx-button @click="showConfirm3" type="light">定制按钮文本</wx-button>
      <wx-divider>事件:@close/插件回调</wx-divider>
      <wx-button @click="showConfirm4" type="light">关闭事件</wx-button>
      <wx-confirm :msg="msg" :visible.sync="visi"></wx-confirm>
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
    showConfirm() {
      this.$confirm("这是 this.$confirm 调用的确认提示框");
    },
    showConfirm2() {
      this.$confirm("标题文本不宜太长，建议4～6个字", {
        title: "这是标题"
      });
    },
    showConfirm3() {
      this.$confirm("按钮文本不宜太长，建议2～4个字", {
        cancelButtonText: "离开",
        okButtonText: "继续"
      });
    },
    showConfirm4() {
      this.$confirm("是否继续？", {}, function(result) {
        if (result === 0) {
          this.$toast("取消了");
        } else {
          this.$toast("确认了");
        }
      });
    }
  }
};
</script>