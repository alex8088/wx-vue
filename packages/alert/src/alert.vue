<template>
  <wx-dialog :visible="visible" class="wx-alert">
    {{msg}}
    <template #footer>
      <a
        href="javascript:;"
        class="weui-dialog__btn weui-dialog__btn_primary"
        @click="handleClose"
      >{{buttonText}}</a>
    </template>
  </wx-dialog>
</template>

<script>
import WxDialog from "../../dialog";
import dialogMixin from "../../core/mixin/dialog"

export default {
  name: "WxAlert",
  components: {
    WxDialog
  },
  mixins: [dialogMixin],
  props: {
    msg: String,
    buttonText: {
      type: String,
      default: "确定"
    },
    closeFunc: Function
  },
  methods: {
    handleClose() {
      this.close();
      if (this.closeFunc) this.closeFunc();
    }
  }
};
</script>