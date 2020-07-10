import WxDialog from "../../dialog";
import dialogMixin from "../../core/mixin/dialog"

export default {
  name: 'WxAd',
  components: {
    WxDialog
  },
  mixins: [dialogMixin],
  render() {
    const scopedSlots = {
      footer: () => {
        return (<a href="javascript:" class="weui-icon-close-circle-thin" onClick={this.close}></a>)
      }
    }
    return (
      <wx-dialog visible={this.visible} class="weui-ad" scopedSlots={scopedSlots}>
        {this.$slots.default}
      </wx-dialog>
    )
  }
}