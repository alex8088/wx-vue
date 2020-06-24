<template>
  <div class="textarea">
    <wx-form ref="form">
      <wx-form-header>文本域</wx-form-header>
      <wx-form-body>
        <wx-form-group title="问题描述">
          <wx-textarea placeholder="请描述你所发生的问题"></wx-textarea>
        </wx-form-group>
        <wx-form-group title="可见行数/字数限制/自动行高/数据校验">
          <wx-textarea v-model="val" placeholder="请描述你所发生的问题" :max-length="200" :rows="4" required autosize></wx-textarea>
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
      val: ""
    };
  }
};
</script>