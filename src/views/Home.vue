<template>
  <div class="home">
    <page-header :title="title" :desc="desc"></page-header>
    <div class="page__bd page__bd_spacing">
      <ul>
        <li v-for="(item, index) in demo" :key="index">
          <div @click="item.expand = !item.expand">
            <wx-flex>
              <wx-flex-item tag="p">{{item.name}}</wx-flex-item>
              <img :src="require(`../assets/${item.icon}`)" alt />
            </wx-flex>
          </div>
          <transition name="accordion">
            <wx-grid v-if="item.expand">
              <wx-grid-item
                v-for="subItem in item.components"
                :key="subItem.name"
                :label="subItem.name"
                :icon="require(`../assets/${subItem.icon}`)"
                :to="{path: subItem.path}"
              ></wx-grid-item>
            </wx-grid>
          </transition>
        </li>
      </ul>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import Demo from "@/demo.json";

export default {
  name: "Home",
  data() {
    return {
      title: "wx-vue",
      desc:
        "wx-vue是一套基于Vue.js和WeUI的移动端UI组件库，旨在帮助开发者提高产品体验和开发效率。",
      demo: Demo
    };
  },
  beforeRouteLeave(to, from, next) {
    from.meta.scrollTop = document.querySelector(".home").scrollTop;
    next();
  },
  activated() {
    document.querySelector(".home").scrollTop = this.$route.meta.scrollTop;
  }
};
</script>