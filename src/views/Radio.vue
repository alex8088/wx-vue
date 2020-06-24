<template>
  <div class="radio">
    <wx-form ref="form">
      <wx-form-header>单选框</wx-form-header>
      <wx-form-body>
        <wx-form-group type="radio" title="默认选中">
          <wx-radio v-model="v1" :options="options1" name="rd1"></wx-radio>
        </wx-form-group>
        <wx-form-group type="radio" title="数据校验">
          <wx-radio v-model="v2" :options="options2" name="rd2" required empty-tips="请选择学历"></wx-radio>
        </wx-form-group>
      </wx-form-body>
      <wx-form-tips>选中值：{{v2}}</wx-form-tips>
      <wx-form-action>
        <wx-button @click="handleClick">确定</wx-button>
      </wx-form-action>
    </wx-form>
  </div>
</template>

<script>
import validateMixin from "../mixin/validate";
export default {
  mixins: [validateMixin],
  data() {
    return {
      options1: [
        { label: "男", value: "male" },
        { label: "女", value: "female" }
      ],
      options2: [
        { label: "本科", value: "1" },
        { label: "硕士", value: "2" },
        { label: "博士", value: "3" },
        { label: "其他 (不可选)", value: "4", disabled: true }
      ],
      v1: "male",
      v2: ""
    };
  }
};
</script>