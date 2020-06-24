<template>
  <div class="input">
    <wx-form ref="form">
      <wx-form-header>输入框</wx-form-header>
      <wx-form-body>
        <wx-form-group title="基本类型">
          <wx-input label="帐号" placeholder="请输入帐号"></wx-input>
          <wx-input type="password" label="密码" placeholder="请输入密码" v-model="pwd"></wx-input>
          <wx-input type="number" label="手机号" placeholder="11位手机号(数字)"></wx-input>
        </wx-form-group>
        <wx-form-group title="只读/不可用">
          <wx-input label="所在地区" placeholder="请输入您的所在地区" readonly></wx-input>
          <wx-input label="详细地址" placeholder="请输入您的详细地址" disabled></wx-input>
        </wx-form-group>
        <wx-form-group title="显示清除">
          <wx-input  type="number" label="邮政编码" placeholder="请输入您的邮政编码" clearable></wx-input>
        </wx-form-group>
        <wx-form-group title="自定义样式">
          <wx-input placeholder="不带标签"></wx-input>
          <wx-input placeholder="请输入帐号或手机号">
            <template #prefix>
              <img
                src="../assets/user.png"
                style="width:20px;height:20px;vertical-align:middle;margin-bottom:3px;"
              />
            </template>
            <template #suffix>
              <i class="weui-icon-info-circle"></i>
            </template>
          </wx-input>
          <wx-input label="验证码" placeholder="请输入验证码" class="weui-cell_vcode">
            <template #suffix>
              <wx-button type="light" class="weui-vcode-btn">获取验证码</wx-button>
            </template>
          </wx-input>
        </wx-form-group>
        <wx-form-group title="数据验证">
          <wx-input
            type="number"
            label="手机号"
            required
            pattern="^\d{11}$"
            placeholder="请输入您的手机号"
            not-match-tips="请输入正确的手机号"
            :max-length="11"
          ></wx-input>
          <wx-input
            label="身份证号"
            pattern="/(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/"
            placeholder="请输入您的身份证号"
            not-match-tips="请输入正确的身份证号"
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
      pwd: "*1234567*"
    };
  }
};
</script>