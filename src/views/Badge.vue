<template>
  <div class="badge">
    <page-header title="Badge" desc="徽章"></page-header>
    <div class="page__bd">
      <wx-list title="新消息提示跟摘要信息后，统一在列表右侧">
        <wx-list-item title="标题文字" @click="handleClick">
          <template #desc>
            <span>说明文字</span>
            <wx-badge style="margin-left: 5px;"></wx-badge>
          </template>
        </wx-list-item>
      </wx-list>
      <wx-list title="未读数红点跟在主题信息后，统一在列表左侧">
        <wx-list-item>
          <template #icon>
            <div style="position: relative; margin-right: 16px;">
              <img :src="icon" style="width: 50px; height:50px; display: block; margin-right: 0;" />
              <wx-badge style="position: absolute; top: -0.5em; right: -0.5em;">8</wx-badge>
            </div>
          </template>
          <template #default>
            <p>联系人名称</p>
            <p style="font-size: 13px; color: #888;">摘要信息</p>
          </template>
        </wx-list-item>
        <wx-list-item desc="说明文字" @click="handleClick">
          <template #default>
            标题文字
            <wx-badge>8</wx-badge>
          </template>
        </wx-list-item>
        <wx-list-item desc="说明文字" @click="handleClick">
          <template #default>
            标题文字
            <wx-badge>new</wx-badge>
          </template>
        </wx-list-item>
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