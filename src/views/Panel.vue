<template>
  <div class="panel">
    <page-header title="Panel" desc="面板"></page-header>
    <div class="page__bd">
      <wx-panel title="图文组合" more-text="查看更多" @moreClick="handleClick">
        <wx-panel-item :title="title" :desc="desc" :img="img" @click="handleClick" v-for="i in 2" :key="i"></wx-panel-item>
      </wx-panel>
      <wx-panel title="文字组合" more-text="查看更多" :more-to="{path: '/'}">
        <wx-panel-item :title="title" :desc="desc" v-for="i in 2" :key="i"></wx-panel-item>
      </wx-panel>
      <wx-panel title="附带来源">
        <wx-panel-item :title="title" :desc="desc" :metas="['Vue中文社区', '1天前']" :to="{path: '/'}"></wx-panel-item>
      </wx-panel>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import img from "@/assets/vue.png";
export default {
  data() {
    return {
      title: "Vue 3.0 beta 了",
      desc:
        "17号凌晨，尤大更新微博，发布了Vue 3.0 beta 测试版，震惊一波吃瓜熬夜党，这个男人终于带着Vue 3来了！",
      img
    };
  },
  methods: {
    handleClick() {
      this.$toast("got!");
    }
  }
};
</script>