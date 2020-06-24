<template>
  <div class="form_layout">
    <wx-form>
      <wx-form-header :desc="desc">表单布局</wx-form-header>
      <wx-form-body>
        <wx-form-group title="表单组标题">
          <wx-input label="微信号" placeholder="填写本人微信号"></wx-input>
          <wx-input label="昵称" placeholder="填写本人微信号的昵称"></wx-input>
          <wx-input label="联系电话" placeholder="填写绑定的电话号码"></wx-input>
        </wx-form-group>
      </wx-form-body>
      <wx-form-tips>表单页提示，居中对齐</wx-form-tips>
      <wx-form-action>
        <wx-button>确定</wx-button>
      </wx-form-action>
      <wx-form-tips>表单页提示，居中对齐</wx-form-tips>
      <wx-form-footer>
        <wx-footer :links="[{to: {path: '/'}, text: '底部链接'}]">Copyright © 2018~2020 alex</wx-footer>
      </wx-form-footer>
    </wx-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc:
        "展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。"
    };
  }
};
</script>