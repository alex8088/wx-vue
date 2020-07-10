<template>
  <div class="ad">
    <page-header title="AD" desc="广告"></page-header>
    <div class="page__bd">
      <wx-button @click="v1 = true">基本用法</wx-button>
      <wx-ad :visible.sync="v1">
        <div class="ad-box">
          <img :src="require('../assets/c3.jpg')" alt />
          <wx-button @click="handleClick" mini>戳我购买</wx-button>
        </div>
      </wx-ad>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.v1 = true;
    }, 1500);
  },
  methods: {
    handleClick() {
      this.v1 = false;
      this.$toast("戳中了～");
    }
  }
};
</script>