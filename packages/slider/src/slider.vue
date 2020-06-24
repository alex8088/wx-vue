<template>
  <div class="weui-slider-box">
    <div :id="id" class="weui-slider">
      <div class="weui-slider__inner">
        <div :style="trackStyle" class="weui-slider__track"></div>
        <div :style="handerStyle" class="weui-slider__handler"></div>
      </div>
    </div>
    <div class="weui-slider-box__value" v-if="showNumber">{{value}}</div>
  </div>
</template>

<script>
import uuid from "../../core/uuid";
import weui from "../../core/weui";

export default {
  name: "WxSlider",
  props: {
    value: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    showNumber: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: "slider_" + uuid.rand()
    };
  },
  computed: {
    trackStyle() {
      return {
        width: `${this.value}%`
      };
    },
    handerStyle() {
      return {
        left: `${this.value}%`
      };
    }
  },
  mounted() {
    if (!this.disabled) {
      let _this = this;
      this.$nextTick(() => {
        weui.slider(`#${this.id}`, {
          step: _this.step,
          defaultValue: _this.value,
          onChange: function(percent) {
            _this.$emit("input", Math.round(percent));
          }
        });
      });
    }
  }
};
</script>