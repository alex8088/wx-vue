<template>
  <div class="datepicker">
    <wx-form ref="form">
      <wx-form-header>日期选择器</wx-form-header>
      <wx-form-body>
        <wx-form-group>
          <wx-date-picker v-model="v1" label="日期" placeholder="请选择日期" required></wx-date-picker>
        </wx-form-group>
        <wx-form-group title="选取范围">
          <wx-date-picker v-model="v2" label="日期" :start="2020" :end="2022" placeholder="2020-2022"></wx-date-picker>
          <wx-date-picker v-model="v3" label="日期" start="2020/2/1" end="2020/12/1" placeholder="2020-2-1至2020-12-1"></wx-date-picker>
          <wx-date-picker v-model="v4" label="日期" cron="* * 0,6" placeholder="自定义(仅周末)"></wx-date-picker>
        </wx-form-group>
        <wx-form-group title="默认值/显示格式/不可用">
          <wx-date-picker v-model="v5" label="日期" placeholder="请选择日期" format="YYYY年M月D日"></wx-date-picker>
          <wx-date-picker v-model="v6" label="日期" placeholder="请选择日期" disabled></wx-date-picker>
        </wx-form-group>
      </wx-form-body>
      <wx-form-tips>选中值：{{v5}}</wx-form-tips>
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
      v1: "",
      v2: "",
      v3: "",
      v4: "",
      v5: "2020/5/20",
      v6: "2022/2/22"
    };
  }
};
</script>