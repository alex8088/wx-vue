<template>
  <div class="input">
    <wx-form ref="form">
      <wx-form-header>图片上传</wx-form-header>
      <wx-form-body>
        <wx-form-group title="上传图片">
          <wx-image-uploader :url="url" @success="uploadSuccess" @error="uploadError" @delete="uploadDelete"></wx-image-uploader>
        </wx-form-group>
      </wx-form-body>
    </wx-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "/fileagent/uploadForServer"
    };
  },
  methods: {
    uploadSuccess(res) {
      this.$toast("上传成功");
      console.log(res);
    },
    uploadError(err) {
      this.$toast(err.message, { width: "180px" });
    },
    uploadDelete(fileId, target, gallery) {
      target.remove();
      gallery.hide();
    }
  }
};
</script>
