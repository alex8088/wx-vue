<template>
  <div class="collapse">
    <page-header title="Collapse" desc="折叠面板"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-collapse v-model="c1">
        <wx-collapse-item title="美观" name="c1">
          <div class="box">遵循WeUI的视觉设计规范，简洁美观，拥有良好的移动交互体验，开发者无需过多关注UI设计</div>
        </wx-collapse-item>
        <wx-collapse-item title="易用">
          <div class="box">尽量少的属性和事件来构建组件，并保持灵活度和规范性，使得组件更简单易用</div>
        </wx-collapse-item>
        <wx-collapse-item title="高效">
          <div class="box">提供整套的移动应用开发框架和文档教程，帮助开发者快速开发出自己的移动应用</div>
        </wx-collapse-item>
      </wx-collapse>
      <wx-divider>手风琴</wx-divider>
      <wx-collapse accordion>
        <wx-collapse-item :title="`标题-${i}`" v-for="i in 4" :key="i">
          <div class="box">内容{{i}}</div>
        </wx-collapse-item>
      </wx-collapse>
      <wx-divider>自定义标题</wx-divider>
      <wx-collapse>
        <wx-collapse-item>
          <template #header>
            <wx-flex>
              <img :src="require(`../assets/sticky.png`)" alt />
              <wx-flex-item tag="p">标题</wx-flex-item>
            </wx-flex>
          </template>
          <div class="box">内容</div>
        </wx-collapse-item>
      </wx-collapse>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      c1: ["c1"]
    };
  }
};
</script>