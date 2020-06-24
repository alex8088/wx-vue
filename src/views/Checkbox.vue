<template>
  <div class="checkbox">
    <wx-form ref="form">
      <wx-form-header>复选框</wx-form-header>
      <wx-form-body>
        <wx-form-group type="checkbox" title="前端框架">
          <wx-checkbox v-model="v1" :options="options1" name="ck1" required empty-tips="至少选择一种前端框架"></wx-checkbox>
        </wx-form-group>
        <wx-form-group type="checkbox" title="默认选中/数据校验(最多可选)">
          <wx-checkbox v-model="v2" :options="options2" name="ck2" pattern="{1,2}" not-match-tips="请选择1~2个城市"></wx-checkbox>
        </wx-form-group>
      </wx-form-body>
      <wx-form-tips>可选1~2个，选中值：{{displayV}}</wx-form-tips>
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
        { label: "Vue", value: "vue" },
        { label: "React", value: "react" }
      ],
      options2: [
        { label: "北京", value: "1" },
        { label: "上海", value: "2" },
        { label: "广州", value: "3" },
        { label: "其他 (不可选)", value: "4", disabled: true }
      ],
      v1: [],
      v2: ["1", "2"],
      displayV: "[]"
    };
  },
  created() {
    this.displayV = JSON.stringify(this.v2);
  },
  watch: {
    v2(val) {
      this.displayV = JSON.stringify(val);
    }
  }
};
</script>