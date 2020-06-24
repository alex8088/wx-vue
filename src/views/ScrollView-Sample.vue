<template>
  <div>
    <wx-scroll-view>
      <wx-list>
        <wx-list-item @click="v = true">Add a row at the end, trigger auto resize</wx-list-item>
        <wx-list-item v-for="(item, index) in items" :key="index">{{item}}</wx-list-item>
        <wx-list-item v-if="v">I'm a fresh row</wx-list-item>
      </wx-list>
    </wx-scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      i: 0,
      v: false
    };
  },
  mounted() {
    this.mockData();
  },
  methods: {
    mockData() {
      let its = [];
      let count = this.items.length + 1;
      for (let i = 0; i < 40; i++) {
        its.push(`row - ${count + i}`);
      }
      this.items = this.items.concat(its);
    }
  }
};
</script>