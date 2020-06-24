export default {
  name: "WxCarouselItem",
  inject: {
    carousel: {
      default: null
    }
  },
  props: {
    img: String,
    title: String
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.img})`
      }
    }
  },
  mounted() {
    this.carousel && this.carousel.init()
  },
  beforeDestroy() {
    this.$nextTick(() => {
      this.carousel && this.carousel.init()
    })
  },
  render() {
    if (this.carousel)
      return (
        <div class="weui-carousel__item " {...{ on: this.$listeners }}>
          {this.$slots.default || (this.img ? (
            <div class="weui-carousel__item-img" style={this.style}></div>) : null)}
          {this.$slots.title || this.title ? (
            <p class="weui-carousel__item-desc">{this.$slots.title || this.title}</p>) : null}
        </div>)
  }
}