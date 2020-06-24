<template>
  <div class="list">
    <page-header title="List" desc="列表"></page-header>
    <div class="page__bd">
      <wx-list title="带说明列表项">
        <wx-list-item title="标题文字" desc="说明文字"></wx-list-item>
        <wx-list-item title="标题文字" desc="说明文字"></wx-list-item>
      </wx-list>
      <wx-list title="带图标、说明列表项">
        <wx-list-item title="标题文字" desc="说明文字" :icon="icon"></wx-list-item>
        <wx-list-item title="标题文字" desc="说明文字" :icon="icon"></wx-list-item>
      </wx-list>
      <wx-list title="带链接、事件列表项">
        <wx-list-item title="事件回调" desc="说明文字" :icon="icon" @click="handleClick"></wx-list-item>
        <wx-list-item title="链接跳转" desc="说明文字" :icon="icon" :to="{path: '/'}"></wx-list-item>
      </wx-list>
      <wx-list title="自定义列表项">
        <wx-list-item>
          <template #icon>
            <img :src="icon" style="width: 50px; height:50px; display: block; margin-right: 16px;" />
          </template>
          <template #default>
            <p>联系人名称</p>
            <p style="font-size: 13px; color: #888;">摘要信息</p>
          </template>
        </wx-list-item>
        <wx-list-item title="标题文字" desc="说明文字" @click="handleClick"></wx-list-item>
      </wx-list>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import icon from "@/assets/picture.png";
export default {
  data() {
    return {
      icon
    };
  },
  methods: {
    handleClick() {
      this.$toast("got!");
    }
  }
};
</script>