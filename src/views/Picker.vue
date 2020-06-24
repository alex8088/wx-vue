<template>
  <div class="picker">
    <wx-form ref="form">
      <wx-form-header>选择框</wx-form-header>
      <wx-form-body>
        <wx-form-group title="单列选择">
          <wx-picker v-model="v1" :data="data1" label="证件类型" placeholder="请选择证件类型" required></wx-picker>
        </wx-form-group>
        <wx-form-group title="级联选择">
          <wx-picker v-model="v2" :data="data2" label="详细地址" :cascade-depth="3" placeholder="请选择详细地址"></wx-picker>
        </wx-form-group>
        <wx-form-group title="默认值/显示格式/不可用">
          <wx-picker v-model="v3" :data="data1" label="证件类型"></wx-picker>
          <wx-picker v-model="v4" :data="data2" label="详细地址" :cascade-depth="3"></wx-picker>
          <wx-picker v-model="v4" :data="data2" label="详细地址" disabled :cascade-depth="3" cascade-text-separator="/"></wx-picker>
        </wx-form-group>
      </wx-form-body>
      <wx-form-tips>详细地址，选中值：{{displayV}}</wx-form-tips>
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
      data1: [
        { label: "身份证", value: 0 },
        { label: "学生证", value: 1 },
        { label: "军官证", value: 2 },
        { label: "护照", value: 3 },
        { label: "其他", value: 4 }
      ],
      data2: [
        {
          label: "广东",
          value: 0,
          children: [
            {
              label: "广州",
              value: 0,
              children: [
                {
                  label: "海珠区",
                  value: 0
                },
                {
                  label: "番禺区",
                  value: 1
                }
              ]
            },
            {
              label: "佛山",
              value: 1,
              children: [
                {
                  label: "禅城区",
                  value: 0
                },
                {
                  label: "南海区",
                  value: 1
                }
              ]
            }
          ]
        },
        {
          label: "广西",
          value: 1,
          children: [
            {
              label: "南宁",
              value: 0,
              children: [
                {
                  label: "青秀区",
                  value: 0
                },
                {
                  label: "兴宁区",
                  value: 1
                }
              ]
            },
            {
              label: "桂林",
              value: 1,
              children: [
                {
                  label: "象山区",
                  value: 0
                },
                {
                  label: "秀峰区",
                  value: 1
                }
              ]
            }
          ]
        }
      ],
      v1: null,
      v2: null,
      v3: 3,
      v4: [0, 1, 0],
      displayV: '[]'
    };
  },
  created() {
    this.displayV = JSON.stringify(this.v4);
  },
  watch: {
    v4(val) {
      this.displayV = JSON.stringify(val);
    }
  }
};
</script>