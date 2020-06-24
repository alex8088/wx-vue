<template>
  <wx-scroll-view style="bottom: 60px">
    <wx-list>
      <wx-list-item>
        <template #icon>
          <div style="position: relative;">
            <img :src="icon1" class="ex-avatar" />
            <wx-badge style="position: absolute; top: -6px; right: 10px;">8</wx-badge>
          </div>
        </template>
        <template #default>
          <p>艾克森</p>
          <p class="ex-desc">带你去世界杯</p>
        </template>
        <template #desc>
          <p class="ex-desc">12:00</p>
          <p style="height: 24px;"></p>
        </template>
      </wx-list-item>
      <wx-list-item class="ex-indent">
        <template #icon>
          <img :src="icon2" class="ex-avatar" />
        </template>
        <template #default>
          <p>Vue 的世界</p>
          <p class="ex-desc">3.0 版本即将来临</p>
        </template>
        <template #desc>
          <p class="ex-desc">10:55</p>
          <p style="height: 24px;"></p>
        </template>
      </wx-list-item>
    </wx-list>
  </wx-scroll-view>
</template>

<script>
import icon1 from "../assets/a1.jpg";
import icon2 from "../assets/vue.png";

export default {
  data() {
    return {
      icon1,
      icon2
    };
  }
};
</script>