<template>
  <a href="javascript:" class="weui-media-box weui-media-box_msg" @click="handleClick" v-if="panel">
    <div class="weui-media-box__hd" v-if="img && metas.length === 0">
      <img class="weui-media-box__thumb" :src="img" alt />
    </div>
    <div class="weui-media-box__bd">
      <h4 class="weui-media-box__title" v-if="title">{{title}}</h4>
      <p class="weui-media-box__desc" v-if="desc">{{desc}}</p>
      <ul class="weui-media-box__info" v-if="metas.length > 0">
        <li class="weui-media-box__info__meta" v-for="meta in metas" :key="meta">{{ meta }}</li>
      </ul>
    </div>
  </a>
</template>

<script>
import routerMixin from "../../core/mixin/router";

export default {
  name: "WxPanelItem",
  mixins: [routerMixin],
  inject: {
    panel: {
      default: false
    }
  },
  props: {
    title: String,
    desc: String,
    img: String,
    to: [String, Object],
    metas: {
      type: Array,
      default: () => []
    }
  }
};
</script>