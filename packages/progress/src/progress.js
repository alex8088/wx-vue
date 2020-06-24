
export default {
  name: 'WxProgress',
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: val => {
        return val >= 0 && val <= 100
      }
    },
    status: {
      type: String,
      validator: val => {
        return ['success', 'fail'].indexOf(val) > -1
      }
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    color: String,
    showText: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    barStyle() {
      return {
        height: this.strokeWidth + 'px',
        borderRadius: this.strokeWidth + 'px'
      }
    },
    innerBarStyle() {
      return {
        width: this.percentage + '%',
        backgroundColor: this.color,
        borderRadius: this.strokeWidth + 'px'
      }
    }
  },
  render() {
    return (
      <div class="weui-progress">
        <div class="weui-progress__bar" style={this.barStyle}>
          <div class="weui-progress__inner-bar" style={this.innerBarStyle}></div>
        </div>
        {this.showText ? (
          <div class="weui-progress__opr">
            {this.status ?
              (<i class={[`weui-icon-${this.status}-circle`]}></i>) :
              (<span class="weui-progress__opr-text">{this.percentage + '%'}</span>)
            }
          </div>) : null}
      </div>
    )
  }
}