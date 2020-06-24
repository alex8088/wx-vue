
import Carousel from "./carousel-core"

export default {
  name: "WxCarousel",
  props: {
    value: {
      type: Number,
      default: 0
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    height: {
      type: String,
      default: "auto"
    },
    aspectRatio: {
      type: Number,
      validator(value) {
        return value > 0 && value <= 1
      }
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) > -1
      }
    },
    indicator: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      carousel: this
    }
  },
  data() {
    return {
      index: this.value || 0,
      items: [],
      instance: null,
      cHeight: this.height,
      load: false
    }
  },
  computed: {
    count() {
      return this.items.length
    }
  },
  watch: {
    value(val) {
      if (val !== this.index) this.go(val || 0)
    },
    index(val) {
      this.$emit("input", val)
      this.$emit("change", val)
    }
  },
  methods: {
    init() {
      if (!this.load) return
      this.items = this.$children.filter(
        child => child.$options.name === "WxCarouselItem"
      )
      this.instance = new Carousel({
        container: this.$el,
        direction: this.direction,
        auto: this.autoplay,
        loop: this.loop,
        interval: this.interval,
        height: this.height
      }).on("swiped", (prev, index) => {
        this.index = index % this.items.length
      })
      this.instance.go(this.index)
    },
    go(index) {
      this.instance && this.instance.go(index)
    },
    destroy() {
      this.instance && this.instance.destroy()
    },
    calcHeight() {
      if (this.aspectRatio)
        this.cHeight = this.$el.offsetWidth * this.aspectRatio.toFixed(1) + 'px'
    }
  },
  mounted() {
    this.load = true
    this.init()
    this.calcHeight()
  },
  beforeDestroy() {
    this.load = false
    this.destroy()
  },
  render() {
    const indicator = this.indicator ? (
      <div
        class={[
          "weui-carousel__indicator",
          `weui-carousel__indicator_${this.direction}`
        ]}
      >
        {[...Array(this.count)].map((i, index) => (
          <i
            class={[
              "weui-carousel__indicator-dot",
              { "weui-carousel__indicator-dot_active": index === this.index }
            ]}
          ></i>
        ))}
      </div>
    ) : null
    return (
      <div class="weui-carousel">
        <div class="weui-carousel__box" style={{ height: this.cHeight }}>
          {this.$slots.default}
        </div>
        {indicator}
      </div>
    )
  }
}
