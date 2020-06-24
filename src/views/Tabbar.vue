<template>
  <wx-tabbar v-model="t" class="tabbar">
    <wx-tabbar-item label="微信" :icon="chatIcon" :active-icon="chatActiveIcon" :badge="8">
      <div class="page__bd">微信</div>
    </wx-tabbar-item>
    <wx-tabbar-item label="通讯录" :icon="icon">
      <div class="page__bd">通讯录</div>
    </wx-tabbar-item>
    <wx-tabbar-item label="发现" :icon="icon" badge>
      <div class="page__bd">发现</div>
    </wx-tabbar-item>
    <wx-tabbar-item label="我" :icon="icon">
      <div class="page__bd">我</div>
    </wx-tabbar-item>
  </wx-tabbar>
</template>

<script>
import icon from "../assets/icon-tabbar.png";
import chatIcon from "../assets/icon-chat-outline.png";
import chatActiveIcon from "../assets/icon-chat.png";

export default {
  data() {
    return {
      icon,
      chatIcon,
      chatActiveIcon,
      t: 0
    };
  }
};
</script>