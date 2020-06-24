<template>
  <div class="page__ft" :class="{'j_bottom': bottom}">
    <a href="https://github.com/alex8088/wx-vue">
      <img src="../assets/github.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      bottom: false
    };
  },
  mounted() {
    this.bottom =
      this.$el.offsetTop + this.$el.clientHeight < window.innerHeight;
  }
};
</script>