<template>
  <div class="carousel">
    <page-header title="Carousel" desc="走马灯"></page-header>
    <div class="page__bd">
      <wx-carousel height="150px">
        <wx-carousel-item v-for="i in 4" :key="i">
          <h3>{{i}}</h3>
        </wx-carousel-item>
      </wx-carousel>
      <wx-divider>高宽比/附带标题/图片适配</wx-divider>
      <wx-carousel :aspect-ratio=".5">
        <wx-carousel-item title="秋裤上架" :img="img1"></wx-carousel-item>
        <wx-carousel-item :img="img2">
          <template #title>秋冬新时尚</template>
        </wx-carousel-item>
        <wx-carousel-item title="咖啡大放价" :img="img3"></wx-carousel-item>
      </wx-carousel>
      <wx-divider>默认值/不滚动/事件绑定</wx-divider>
      <wx-carousel height="150px" :autoplay="false" v-model="c1">
        <wx-carousel-item v-for="i in 4" :key="i" @click="handleClick">
          <h3>{{i}}</h3>
        </wx-carousel-item>
      </wx-carousel>
      <wx-divider>change事件: 索引-{{c2}}</wx-divider>
      <wx-carousel height="150px" @change="handleChange">
        <wx-carousel-item v-for="i in 4" :key="i">
          <h3>{{i}}</h3>
        </wx-carousel-item>
      </wx-carousel>
      <wx-divider>纵向滚动/无指示器</wx-divider>
      <wx-carousel height="40px" direction="vertical" :indicator="false">
        <wx-carousel-item v-for="(title, index) in data" :key="index">
          <span>{{title}}</span>
        </wx-carousel-item>
      </wx-carousel>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpg";
export default {
  data() {
    return {
      c1: 1,
      c2: 0,
      img1,
      img2,
      img3,
      data: [
        "遵循weui的视觉设计规范，简洁美观",
        "丰富的组件和API，适用各种应用场景",
        "组件简单易用，并保持灵活度和规范性",
        "支持主题定制，满足个性化需求",
        "提供整套的移动应用开发框架，降低开发成本"
      ]
    };
  },
  methods: {
    handleChange(index) {
      this.c2 = index;
    },
    handleClick() {
      this.$toast("got!");
    }
  }
};
</script>