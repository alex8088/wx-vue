<template>
  <wx-dialog :visible="visible" class="wx-confirm">
    <template #header v-if="title">
      <strong class="weui-dialog__title">{{title}}</strong>
    </template>
    {{msg}}
    <template #footer>
      <a
        href="javascript:"
        class="weui-dialog__btn weui-dialog__btn_default"
        @click="handleClick(0)"
      >{{cancelButtonText}}</a>
      <a
        href="javascript:;"
        class="weui-dialog__btn weui-dialog__btn_primary"
        @click="handleClick(1)"
      >{{okButtonText}}</a>
    </template>
  </wx-dialog>
</template>

<script>
import WxDialog from "../../dialog";
import dialogMixin from "../../core/mixin/dialog"

export default {
  name: "WxConfirm",
  components: {
    WxDialog
  },
  mixins: [dialogMixin],
  props: {
    title: String,
    msg: String,
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    okButtonText: {
      type: String,
      default: "确定"
    },
    closeFunc: Function
  },
  methods: {
    handleClick(index) {
      this.close(index);
      if (this.closeFunc) this.closeFunc(index);
    }
  }
};
</script>