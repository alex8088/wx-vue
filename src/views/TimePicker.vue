<template>
  <div class="timepicker">
    <wx-form ref="form">
      <wx-form-header>时间选择器</wx-form-header>
      <wx-form-body>
        <wx-form-group>
          <wx-time-picker v-model="v1" label="时间" placeholder="请选择时间" required></wx-time-picker>
        </wx-form-group>
        <wx-form-group title="选取范围">
          <wx-time-picker v-model="v2" label="时间" :start="9" :end="18" placeholder="指定时段"></wx-time-picker>
          <wx-time-picker v-model="v3" label="时间" :time-span="15" placeholder="指定间隔"></wx-time-picker>
        </wx-form-group>
        <wx-form-group title="默认值/显示格式/不可用">
          <wx-time-picker v-model="v4" label="时间" placeholder="请选择时间" format="HH时mm分"></wx-time-picker>
          <wx-time-picker v-model="v5" label="时间" placeholder="请选择时间" disabled></wx-time-picker>
        </wx-form-group>
      </wx-form-body>
      <wx-form-tips>选中值：{{v4}}</wx-form-tips>
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
      v4: "12:55",
      v5: "23:59"
    };
  }
};
</script>