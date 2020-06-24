<template>
  <div>
    <wx-scroll-view
      :pull-text="pullText"
      :refresh-text="refreshText"
      :load-text="loadText"
      :no-data-text="noDataText"
      @refresh="refresh"
      @infinite="infinite"
    >
      <wx-list>
        <wx-list-item v-for="(item, index) in items" :key="index">{{item}}</wx-list-item>
      </wx-list>
    </wx-scroll-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pullText: "Pull to refresh",
      refreshText: "Release to refresh",
      loadText: "Loading",
      noDataText: "No more data",
      items: [],
      i: 0,
      v: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    mockData() {
      let its = [];
      let count = this.items.length + 1;
      for (let i = 0; i < 20; i++) {
        its.push(`row - ${count + i}`);
      }
      this.items = this.items.concat(its);
    },
    init() {
      this.i = 0;
      this.items = [];
      this.mockData();
    },
    refresh(e) {
      setTimeout(() => {
        this.init();
        e.stopRefresh();
      }, 1500);
    },
    infinite(e) {
      setTimeout(() => {
        if (this.i === 2) {
          e.stopInfinite(true);
          return;
        }
        this.mockData();
        e.stopInfinite();
        this.i++;
      }, 1000);
    }
  }
};
</script>