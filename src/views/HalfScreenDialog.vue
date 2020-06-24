<template>
  <div class="halfscreendialog">
    <page-header title="Half-screen Dialog" desc="半屏对话框"></page-header>
    <div class="page__bd">
      <wx-button @click="visi = true" type="light">例子一</wx-button>
      <wx-half-screen-dialog title="标题" :visible.sync="visi">
        <div style="height: 50px;">可放自定义内容</div>
      </wx-half-screen-dialog>
      <br />
      <wx-button @click="visi2 = true" type="light">例子二</wx-button>
      <wx-half-screen-dialog title="标题" desc="副标题" :visible.sync="visi2">
        <p class="weui-half-screen-dialog__desc">辅助描述内容，可根据实际需要安排</p>
        <p class="weui-half-screen-dialog__tips">辅助提示内容，可根据实际需要安排</p>
        <template #footer>
          <wx-button @click="visi2 = false" type="light">取消</wx-button>
          <wx-button @click="visi2 = false">确定</wx-button>
        </template>
      </wx-half-screen-dialog>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visi: false,
      visi2: false
    };
  }
};
</script>