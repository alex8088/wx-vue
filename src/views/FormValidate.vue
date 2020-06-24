<template>
  <div class="form_validate">
    <wx-form ref="form">
      <wx-form-header>表单校验</wx-form-header>
      <wx-form-body>
        <wx-form-group title="输入框">
          <wx-input label="常住地址" required empty-tips="必须填写常住地址" placeholder="请输入常住地址"></wx-input>
          <wx-input
            label="手机号码"
            type="number"
            pattern="^\d{11}$"
            not-match-tips="手机号码格式错误"
            placeholder="请输入手机号码"
          ></wx-input>
        </wx-form-group>
      </wx-form-body>
      <wx-form-action>
        <wx-button @click="handleClick">确定</wx-button>
      </wx-form-action>
    </wx-form>
  </div>
</template>

<script>
import validateMixin from "../mixin/validate"

export default {
  mixins: [validateMixin],
  data() {
    return {
    };
  }
};
</script>