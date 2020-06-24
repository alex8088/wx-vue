<template>
  <div
    class="weui-cell"
    :class="[{'weui-cell_access': !_disabled}, {'weui-cell_disabled': _disabled}]"
  >
    <div class="weui-cell__hd" v-if="label">
      <label class="weui-label">{{label}}</label>
    </div>
    <div class="weui-cell__bd" @click="handleClick">
      <input
        type="hidden"
        v-model="currentValue"
        :required="required"
        :placeholder="placeholder"
        :emptytips="emptyTips"
      />
      <input
        type="text"
        class="weui-input"
        v-model="currentText"
        :placeholder="placeholder"
        readonly="readonly"
      />
    </div>
    <div class="weui-cell__ft">
      <i class="weui-icon-warn"></i>
    </div>
  </div>
</template>