<template>
  <div class="weui-scroll-view" :id="wrapper" ref="wrapper">
    <div
      class="weui-scroll-view_pull-refresh"
      :class="[{'pull' : pull}, {'refresh': refresh}]"
      ref="refresh"
      v-if="bindRefresh"
    >
      <div class="weui-scroll-view__pull">
        <i class="weui-pulling"></i>
        <span class="weui-scroll-view__pull-text">{{pull === 0 ? pullText : refreshText}}</span>
      </div>
      <div class="weui-scroll-view__refresh">
        <i class="weui-loading"></i>
      </div>
    </div>
    <div class="weui-scroll-view_container" ref="container">
      <slot></slot>
      <div class="weui-scroll-view__load" v-if="bindInfinite">
        <i class="weui-loading" v-if="infinite"></i>
        <span class="weui-scroll-view__load-text">{{infinite ? loadText : noDataText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from "../../core/uuid";
import Touch from "../../core/touch";
import Transform from "../../core/transform";

export default {
  name: "WxScrollView",
  props: {
    pullText: {
      type: String,
      default: "下拉刷新"
    },
    refreshText: {
      type: String,
      default: "释放更新"
    },
    loadText: {
      type: String,
      default: "正在加载"
    },
    noDataText: {
      type: String,
      default: "没有更多数据"
    }
  },
  data() {
    return {
      wrapper: `wrapper-${uuid.rand()}`,
      scroller: null,
      pull: 0,
      refresh: 0,
      load: 0,
      bindRefresh: false,
      bindInfinite: false,
      infinite: true
    };
  },
  created() {
    this.bindRefresh = this.$listeners.refresh ? true : false;
    this.bindInfinite = this.$listeners.infinite ? true : false;
  },
  mounted() {
    let _this = this;
    this.$nextTick(() => {
      if (_this.$listeners.refresh) Transform(_this.$refs.refresh, true);
      Transform(_this.$refs.container, true);

      _this.scroller = new Touch({
        touch: `#${_this.wrapper}`,
        vertical: true,
        target: _this.$refs.container,
        property: "translateY",
        value: 0,
        min: 0,
        max: 0,
        change: function(value) {
          if (_this.bindRefresh) _this.$refs.refresh.translateY = value;
          if (
            _this.bindInfinite &&
            _this.load === 0 &&
            _this.refresh === 0 &&
            value < this.min + 45
          ) {
            _this.load = 1;
            _this.$emit("infinite", _this);
          }
        },
        touchMove: function(evt, value) {
          if (_this.bindRefresh && _this.pull === 0)
            _this.pull = value > 70 ? 1 : 0;
        },
        touchEnd: function(evt, value) {
          if (_this.bindRefresh && _this.refresh === 0 && value > 70) {
            this.to(55);
            _this.refresh = 1;
            _this.$emit("refresh", _this);
            return false;
          }
        }
      });
    });
  },
  activated() {
    this.resize();
  },
  updated() {
    if (!this.pull && !this.refresh && !this.load) this.resize();
    if (
      this.bindInfinite &&
      !this.load &&
      !this.refresh &&
      this._getMin() + 45 > 0
    ) {
      this.load = 1;
      this.$emit("infinite", this);
    }
  },
  beforeDestroy() {
    this.scroller.stop();
    this.scroller = null;
  },
  methods: {
    _getMin() {
      return (
        this.$refs.wrapper.clientHeight - this.$refs.container.offsetHeight
      );
    },
    resize() {
      this.$nextTick(() => {
        let min = this._getMin();
        this.scroller.min = min >= 0 ? 0 : min;
      });
    },
    stopRefresh() {
      if (this.refresh) {
        this.$refs.refresh.translateY = 0;
        this.scroller.to(this.scroller.value);
        this.pull = 0;
        this.refresh = 0;
        // setTimeout(() => {
        //   this.pull = 0;
        //   this.refresh = 0;
        // }, 300);
      }
      this.infinite = true;
    },
    stopInfinite(end) {
      if (this.load) {
        this.load = 0;
        this.infinite = !end;
      }
    }
  }
};
</script>